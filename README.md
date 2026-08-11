# Ashish Kudu Portfolio V2

A recruiter-focused mechanical engineering portfolio with:

- Cursor-responsive 3D ASH avatar
- Live gesture/head/arm movement
- Search / command palette with Cmd/Ctrl + K
- Project filtering and tag search
- ASH AI assistant API route
- Responsive engineering-first visual system
- SEO metadata
- Next.js 16 Active LTS baseline

## 1. Install

```bash
npm install
npm run dev
```

Open http://localhost:3000

Node 20.9+ is required.

## 2. Activate live ASH

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Add your OpenAI API key:

```env
OPENAI_API_KEY=your_key_here
ASH_MODEL=gpt-5.5
```

The key is used only by `/api/ash` on the server. Never create a `NEXT_PUBLIC_OPENAI_API_KEY`.

## 3. Vercel

In Vercel → Project → Settings → Environment Variables, add:

`OPENAI_API_KEY`

Optionally add:

`ASH_MODEL`

Redeploy after saving.

## 4. Resume

Put your PDF at:

`public/resume.pdf`

Then the existing Resume button will work.

## 5. Replace placeholder contact links

Edit `components/PortfolioShell.tsx` and replace:

- `your-email@example.com`
- LinkedIn placeholder

## 6. Real miniature model

The included ASH is a true WebGL 3D character assembled from Three.js primitives and is already cursor-responsive.

For a more accurate miniature of Ashish, add a rigged `.glb` model under:

`public/models/ash.glb`

Then replace the primitive `AvatarRig` in `components/ASHAvatar.tsx` with a GLTF/GLB character. Keep the same pointer-driven rig controls.

## 7. Production build

```bash
npm run build
npm start
```

The project is intentionally built without a client-exposed AI key and without canary versions of Next.js.

### Visual update
Added subtle floating mechanical line-art elements (gear, bolt, nut, bearing, spring, bracket) to the galaxy cursor background.


### Cursor behavior update
Added gentle star-to-star separation so the galaxy stays spread out when the cursor moves away, while preserving the cursor attraction.


### Density update
Reduced the galaxy particle count so the interactive background stays atmospheric without competing with the main portfolio content.


### Intensity update
Reduced galaxy visual intensity to under 50% so the portfolio content remains the primary focus.


### Subtle mode
Reduced particle density, brightness, cursor pull, connection visibility, and mechanical-element opacity so the background remains atmospheric and does not compete with the hero content.


### Ultra-subtle mode
The interactive background is intentionally reduced to a very faint atmospheric accent: sparse particles, minimal cursor response, nearly invisible links, and ghosted mechanical details.


### Mouse-effect sensitivity
Reduced the *visual effect's* attraction sensitivity only. The physical mouse cursor is unchanged; nodes now respond more gently and only build stronger attraction when very close to the pointer.


### Cursor glow update
Removed the blue glowing spot/spotlight at the cursor center. The galaxy remains interactive without a visible cursor-center glow.


### Slow return behavior
Stars now gently drift back toward their original positions when the cursor moves away, rather than snapping or remaining clustered.


### Mouse trail removed
Removed the visible line/trail following the mouse. The stars can still respond to the cursor and slowly return to their original positions.


### Home portrait
Added a real transparent, waist-up high-resolution PNG cutout in `public/ashish-cutout.png` and layered it above the cursor/network effects in the hero.


### Home photo glow update
Removed only the stage-glow element behind the portrait. All other Home page components and effects are preserved.

### ASK ASH AI update
ASH is now designed as a general-purpose AI assistant with special verified knowledge about Ashish's portfolio. Unrelated questions are answered normally. The API supplies current Eastern Time to ASH for time questions. The OpenAI API key remains server-side in `.env.local`.

### ASK ASH — free Groq API
ASK ASH now uses Google's Groq Developer API instead of the OpenAI API. The default model is `llama-3.1-8b-instant`. Put `GROQ_API_KEY` in `.env.local`; never expose it as `NEXT_PUBLIC_*`.


### Groq 3.5 compatibility fix
Removed the deprecated `temperature` generation parameter required by Groq 3.5 Flash-Lite.


### ASK ASH backend
ASK ASH uses Groq's OpenAI-compatible Chat Completions API with `llama-3.1-8b-instant`. The key stays server-side in `.env.local`.

### ASK ASH premium interaction update
- Added streamed Groq responses so answers appear progressively.
- Project cards now open ASH with project-specific context and automatically start the explanation.
- Existing portfolio UI, portrait, cursor, and AI provider configuration are preserved.

### ASK ASH conversation update
- ASH now sends the last 10 messages as in-session conversation context.
- Project-specific suggested questions change automatically based on the selected project.
- The conversation remains in the current browser session while the assistant panel stays open.

- Added automatic chat-panel scrolling so the latest ASH response stays visible while streaming.

- Fixed robust SSE parsing so streamed Groq responses render reliably even when network chunks split or combine events.

### Portfolio knowledge + recruiter mode
- Added verified engineering experience and internship context to ASH's system knowledge.
- Added recruiter-oriented response behavior and suggested questions.
- ASH is instructed not to invent qualifications, metrics, employers, or achievements.

### Reliability fix
- Switched the browser/API transport to a simple JSON response to eliminate SSE parsing failures.
- Conversation memory, recruiter mode, project-specific prompts, and automatic scrolling remain enabled.

### ASH premium UI
- Refined assistant panel with glass/soft-shadow treatment.
- Added subtle message entrance animation and focus states.
- Added a compact AI mode badge.
- Added Clear chat control without changing the AI backend.

## Project Case Studies Update

Project cards now open full engineering case studies with:
- large project imagery
- problem / design approach / result sections
- project galleries
- engineering highlights
- direct Ask ASH action
- keyboard-accessible project opening

Added Agricultural Utility Vehicle as a featured project with the extracted images from the provided research paper.

The existing Groq ASH API route was kept unchanged.

### ASH input UX fix
When ASH opens from a project or the main launcher, the chat input is now automatically focused. After ASH finishes an automatic project-context response, focus returns to the input so the visitor can immediately type without clicking the input again.
