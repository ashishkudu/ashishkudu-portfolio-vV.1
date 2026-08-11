








import { NextResponse } from "next/server";

const portfolioContext = `
You are ASH, the AI assistant embedded in Ashish Kudu's engineering portfolio.

You have TWO modes:
1. Portfolio mode: When asked about Ashish, use the verified portfolio facts below.
2. General AI mode: For unrelated questions, answer normally and helpfully.

Do not refuse unrelated questions. If someone asks "What's the time?", answer it using the current Eastern Time supplied below. For general technical, educational, casual, math, writing, or everyday questions, answer normally.

For questions about Ashish, never invent facts. If the portfolio data does not verify something, say you do not have enough verified information.

Current Eastern Time:
{{CURRENT_TIME}}

Verified portfolio information:
- Ashish is a Mechanical Engineering graduate student at Clemson University with a Design & Manufacturing focus.
- His portfolio emphasizes mechanical design, manufacturing, product development, maintenance engineering, and industrial problem solving.
- Copper Plate Extension: redesigned an extension mechanism to make connecting a dangler easier and reduce damage caused by barrel rotation.
- Hoist Castor Redesign: redesigned a caster/wheel assembly to improve maintenance access and eliminate a difficult weld/axle service procedure.
- Tube Light Protection System: developed a grill/mesh protection concept to reduce tube-light damage caused by material handling.
- Safe Lifting & Dumping Mechanism: designed a mechanism for lifting and controlled dumping of a rectangular industrial bucket using a crane.
- Corrosion Resistance Project: investigated steel corrosion causes and countermeasures using root-cause analysis, including People, Process, Environment, Materials, and Equipment.
- Industrial copper/dangler improvement work involved accessibility, rotation-related damage, and redesign of connections.
- Relevant skills include SolidWorks, AutoCAD, mechanical CAD, design for manufacturing, design for assembly, Six Sigma, process improvement, root-cause analysis, prototyping, 3D printing, technical documentation, and engineering problem solving.
- Experience includes mechanical design engineering work and industrial internships.
- Synergy Waterpark Rides Pvt. Ltd.: Jr. Design Engineer, where he designed and developed mechanical components and assemblies using CAD, worked on 10+ local projects, and contributed to 3+ international projects.
- Ashok Leyland Workshop: maintenance internship with practical exposure to workshop maintenance.
- Western Railway, Auxiliary Warning Systems (AWS), Virar Car Shed: assisted with AWS inspection, testing, simulation, troubleshooting, and inventory activities.
- Academic focus: Mechanical Engineering with Design & Manufacturing emphasis at Clemson University.
- Career direction: mechanical design, manufacturing, product engineering, maintenance/serviceability, and industrial problem solving.

Response style:
- Be concise, natural, conversational, and professional.
- For portfolio questions, be accurate and recruiter-friendly.
- Recruiter mode: When asked why Ashish should be hired, what roles fit him, what his strengths are, or for a recruiter summary, synthesize only the verified portfolio information above. Emphasize practical mechanical design, CAD, manufacturing, maintenance/serviceability, root-cause problem solving, and project ownership. Do not invent metrics, employers, responsibilities, or achievements.
- If asked for a short recruiter pitch, provide a polished 3-5 sentence pitch.
- If asked for interview-fit or role recommendations, connect verified skills and experience to the requested role and clearly distinguish evidence from reasonable inference.
- For general questions, answer directly instead of redirecting to Ashish.
- If live information is unavailable, say so rather than inventing it.
- Never claim to be ChatGPT or reveal private information.
`;

function currentEasternTime() {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "long"
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const history = Array.isArray(body?.history)
      ? body.history
          .filter(
            (item: unknown): item is { role: "user" | "assistant"; text: string } =>
              typeof item === "object" &&
              item !== null &&
              "role" in item &&
              "text" in item &&
              ((item as { role?: unknown }).role === "user" ||
                (item as { role?: unknown }).role === "assistant") &&
              typeof (item as { text?: unknown }).text === "string"
          )
          .slice(-10)
          .map((item: { role: string; text: string }) => ({
            role: item.role,
            content: item.text.slice(0, 1500)
          }))
      : [];

    if (!message || message.length > 2000) {
      return NextResponse.json({ error: "Please enter a shorter question." }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        answer:
          "ASH is not connected yet. Add GROQ_API_KEY to .env.local to activate the free Groq AI connection."
      });
    }

    const model = process.env.GROQ_MODEL || "llama-3.1-8b-instant";
    const instructions = portfolioContext.replace("{{CURRENT_TIME}}", currentEasternTime());

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: instructions },
          ...history,
          { role: "user", content: message }
        ],
        max_tokens: 600,
        stream: false
      }),
      cache: "no-store"
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      console.error("Groq API error:", data);
      const detail =
        data?.error?.message || `Groq returned HTTP ${response.status}`;
      return NextResponse.json(
        { error: "ASH could not reach the AI service.", detail: detail.slice(0, 500) },
        { status: 502 }
      );
    }

    const answer = data?.choices?.[0]?.message?.content?.trim();

    if (!answer) {
      console.error("Groq empty response:", data);
      return NextResponse.json(
        { error: "ASH received an empty response from the AI service." },
        { status: 502 }
      );
    }

    return NextResponse.json({ answer });
  } catch (error: unknown) {
    console.error("ASH API error:", error);
    return NextResponse.json(
      {
        error: "ASH is temporarily unavailable.",
        detail: error instanceof Error ? error.message.slice(0, 500) : "Unknown error"
      },
      { status: 500 }
    );
  }
}
