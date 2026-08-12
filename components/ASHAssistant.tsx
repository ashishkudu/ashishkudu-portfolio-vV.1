"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; text: string };

const defaultSuggestions = [
  "What projects has Ashish worked on?",
  "Why should a company hire Ashish?",
  "What are Ashish's strongest engineering skills?"
];

const recruiterSuggestions = [
  "Give me a recruiter summary of Ashish.",
  "Why would Ashish be a good Mechanical Design Engineer?",
  "What makes Ashish's engineering experience stand out?"
];

function suggestionsForPrompt(prompt: string) {
  const p = prompt.toLowerCase();
  if (p.includes("copper plate")) {
    return [
      "What problem did the Copper Plate Extension solve?",
      "What was improved in the design?",
      "Why was serviceability important?"
    ];
  }
  if (p.includes("hoist castor")) {
    return [
      "What was wrong with the original castor design?",
      "How did the redesign improve maintenance?",
      "What engineering decisions were involved?"
    ];
  }
  if (p.includes("tube light")) {
    return [
      "Why was the tube light being damaged?",
      "How did the protection concept work?",
      "What manufacturing considerations mattered?"
    ];
  }
  if (p.includes("lifting") || p.includes("dumping")) {
    return [
      "How does the lifting and dumping mechanism work?",
      "What safety problem was being solved?",
      "What constraints affected the design?"
    ];
  }
  if (p.includes("corrosion")) {
    return [
      "What caused the corrosion problem?",
      "How was the root cause analyzed?",
      "What countermeasures were considered?"
    ];
  }
  if (p.includes("dangler")) {
    return [
      "What problem did the dangler redesign solve?",
      "How was access improved?",
      "What caused the rotation-related wear?"
    ];
  }
  if (p.includes("recruit") || p.includes("hire") || p.includes("job") || p.includes("candidate")) {
    return recruiterSuggestions;
  }
  return defaultSuggestions;
}

export default function ASHAssistant({
  open,
  onClose,
  initialPrompt = ""
}: {
  open: boolean;
  onClose: () => void;
  initialPrompt?: string;
}) {
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I’m ASH. Ask me about Ashish, or ask me anything."
    }
  ]);
  const lastPrompt = useRef("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [sessionId, setSessionId] = useState("");
  const [stored, setStored] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const key = "ash-session-id";
    const existing = window.localStorage.getItem(key);
    if (existing) {
      setSessionId(existing);
      return;
    }
    const id = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    window.localStorage.setItem(key, id);
    setSessionId(id);
  }, []);

  const suggestions = useMemo(
    () => suggestionsForPrompt(initialPrompt),
    [initialPrompt]
  );

  async function ask(text: string) {
    const value = text.trim();
    if (!value || busy) return;

    let activeSessionId = sessionId;
    if (!activeSessionId) {
      const key = "ash-session-id";
      activeSessionId = window.localStorage.getItem(key) || window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      window.localStorage.setItem(key, activeSessionId);
      setSessionId(activeSessionId);
    }

    const historyForRequest = messages
      .filter((m) => m.text.trim())
      .slice(-10);

    setMessages((m) => [
      ...m,
      { role: "user", text: value },
      { role: "assistant", text: "" }
    ]);
    setInput("");
    setBusy(true);

    try {
      const res = await fetch("/api/ash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: value,
          history: historyForRequest,
          sessionId: activeSessionId
        })
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.answer) {
        throw new Error(
          data.detail
            ? `${data.error || "ASH error"} ${data.detail}`
            : data.error || "ASH could not generate a response."
        );
      }

      setStored(Boolean(data.stored));
      setMessages((m) => {
        const copy = [...m];
        const idx = copy.length - 1;
        if (copy[idx]?.role === "assistant") {
          copy[idx] = { role: "assistant", text: data.answer };
        }
        return copy;
      });
    } catch (error) {
      setMessages((m) => {
        const copy = [...m];
        const idx = copy.length - 1;
        if (copy[idx]?.role === "assistant") {
          copy[idx] = {
            role: "assistant",
            text: error instanceof Error
              ? error.message
              : "I’m having trouble connecting right now."
          };
        }
        return copy;
      });
    } finally {
      setBusy(false);
      window.setTimeout(() => inputRef.current?.focus(), 80);
    }
  }

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 120);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (open && initialPrompt && initialPrompt !== lastPrompt.current && !busy) {
      lastPrompt.current = initialPrompt;
      void ask(initialPrompt);
    }
  }, [open, initialPrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: busy ? "auto" : "smooth",
      block: "end"
    });
  }, [messages, busy]);

  async function deleteStoredConversation() {
    if (!sessionId || deleting) return;
    setDeleting(true);
    try {
      const res = await fetch("/api/ash", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId })
      });
      if (!res.ok) throw new Error("Delete failed");
      setMessages([{ role: "assistant", text: "Your stored ASH conversation has been deleted from the database." }]);
      setStored(false);
    } catch {
      setMessages((m) => [...m, { role: "assistant", text: "I couldn’t delete the stored conversation right now. Please try again." }]);
    } finally {
      setDeleting(false);
    }
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    void ask(input);
  }

  if (!open) return null;

  return (
    <>
      <div className="ash-backdrop" onClick={onClose} aria-hidden="true" />
      <aside className="ash-panel" aria-label="ASH assistant">
      <div className="ash-panel-head">
        <div>
          <div className="eyebrow">ASH</div>
          <h3>Ashish&apos;s Engineering Assistant</h3>
          <span className="online"><i /> Online</span>
          <span className="ash-mode-badge">AI • Engineering + General</span>
        </div>
        <button className="icon-button" onClick={onClose} aria-label="Close ASH">×</button>
      </div>

      <div className="ash-messages" role="log" aria-live="polite">
        {messages.map((m, i) => (
          <div key={i} className={`ash-message ${m.role}`}>
            {m.text}
          </div>
        ))}
        {busy && <div className="ash-message assistant ash-streaming">ASH is thinking<span className="dots">...</span></div>}
        <div ref={messagesEndRef} aria-hidden="true" />
      </div>

      <div className="ash-suggestions">
        {suggestions.map((s) => (
          <button key={s} onClick={() => void ask(s)} disabled={busy}>{s}</button>
        ))}
      </div>

      <div className="ash-clear-row">
        <span>{stored ? "Conversation stored" : "ASH • AI assistant"}</span>
        <div className="ash-data-actions">
          <button type="button" onClick={() => setMessages([{ role: "assistant", text: "Hi! I’m ASH. Ask me about Ashish, or ask me anything." }])}>Clear chat</button>
          {stored && <button type="button" onClick={() => void deleteStoredConversation()} disabled={deleting}>{deleting ? "Deleting…" : "Delete stored data"}</button>}
        </div>
      </div>

      <form className="ash-input" onSubmit={submit}>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask ASH anything..."
          aria-label="Ask ASH anything"
          maxLength={1000}
          disabled={busy}
        />
        <button type="submit" disabled={busy || !input.trim()} aria-label="Send">↑</button>
      </form>

        <div className="ash-footnote">
      ASH stores questions and answers from this anonymous session. <a href="/privacy" target="_blank" rel="noreferrer">Privacy</a>
    </div>
  </aside>
</>
);
}
