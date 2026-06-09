# 🍝 Pasta Notes — Pomodoro Note-Taking App

> A cute, pasta-themed note-taking application that uses the Pomodoro Technique to keep you productive (and entertained).

## 🎬 Demo Videos

We have recorded demos covering every major feature:

| Demo | Description |
|------|-------------|
| [Editor Features](demo/editor-features.webm) | Bold, italic, underline, fonts, colors, tables |
| [Sprite Interactions](demo/sprite-interactions.webm) | Click, right-click menu, throw sauce, pull noodle, change sprite, clean stains |
| [Pomodoro Escalation](demo/pomodoro-escalation.webm) | All 5 escalation levels when ignoring break reminders |
| [Timer Mockery](demo/timer-mockery.webm) | Setting extreme work/break times and getting mocked by the sprite |
| [Note Management](demo/note-management.webm) | Creating notes, switching between them, sections |

*Your pasta buddy reminds you to take breaks — and gets increasingly dramatic if you ignore them!*

## ✨ Features

### 📝 Rich Text Editor
- **Bold**, *italic*, <u>underline</u>, and ~~strikethrough~~
- Multiple font families (Serif, Mono, Comic, Arial)
- Text colors and highlighting
- Headings (H1, H2, H3)
- Bullet and numbered lists
- Text alignment (left, center, right)
- Paste images directly from clipboard
- Insert tables
- Insert line and pie charts

### 🍅 Pomodoro Timer
- Configurable work sessions (default 25 minutes) with visual progress ring
- Configurable break length (default 5 minutes) with enforced lockout
- ⚙️ Settings panel to adjust both timers
- **Timer mockery**: Set extreme values and your pasta sprite roasts you!
  - Work too short (< 5 min): *"A work session that short? Even instant ramen takes longer!"*
  - Work too long (> 2 hrs): *"Planning to work THAT long?! Even marathon runners take water breaks!"*
  - Break too short (< 2 min): *"That's barely enough time to boil a single piece of penne!"*
  - Break too long (> 30 min): *"At that point just take a nap! Even lasagna doesn't rest that long!"*
- Escalating break reminders that get more aggressive the longer you ignore them:
  - Level 0: *"Hey, nice job! You've been pasta-tively productive!"*
  - Level 1: *"Still going? Even spaghetti snaps if you stretch it too far."*
  - Level 2: *"Your brain is turning into alphabet soup!"*
  - Level 3: *"LISTEN HERE, NERD! Go outside and TOUCH GRASS!"*
  - Level 4: *"EMERGENCY PASTA ALERT 🚨 THE HUMAN HAS FUSED WITH THEIR DESK"*

### 🍝 Pasta Sprite Companion
Choose from 10 pasta buddies, each with their own personality:

| Sprite | Personality |
|--------|-------------|
| 🧀 Cacio e Pepe | Sophisticated knowledge-dropper |
| 🥓 Carbonara | Warm comforting friend |
| 🍝 Spaghetti & Meatballs | Energetic cheerleader |
| 🫕 Fettuccine Alfredo | Calm zen wisdom |
| 🌶️ Penne Arrabbiata | Sassy truth-teller |
| 🥟 Ravioli | Cute bubbly giggler |
| 🫓 Lasagna | Layered wise elder |
| 🍜 Tortellini in Brodo | Cozy quiet advisor |
| 🌿 Pesto Fusilli | Health-conscious reminder |
| 🧈 Mac & Cheese | Ride-or-die bestie |

**Sprite Interactions:**
- 🖱️ Click for encouragement
- 🖱️ Right-click for action menu
- 🍝 Pull their noodles
- 🍅 Throw pasta sauce on your notes for color
- 🔄 Change your pasta buddy anytime
- ↔️ Drag them anywhere on screen

### 📁 Note Organization
- Create and manage sections (folders)
- Notes ordered by creation date
- Rename notes with double-click
- All data persisted in localStorage

## 🚀 Getting Started

```bash
cd projects/joramirez/pasta-notes
npm install
npm run dev
```

Open http://localhost:5173 and start taking notes! 🍝

## 🎬 Recording a Demo

```bash
npm run dev          # Start the app first
node scripts/record-demo.cjs   # Records a demo video
```

Requires FFmpeg installed (`winget install Gyan.FFmpeg`).

## 🏗️ Architecture

```
src/
├── components/
│   ├── Editor/        → Rich text editor (TipTap) + toolbar
│   ├── Notes/         → Sidebar with sections & note list
│   ├── Pomodoro/      → Timer widget with progress ring
│   └── Sprite/        → Pasta sprite + interactions + dialogue
├── hooks/
│   ├── usePomodoro.js → Timer state machine
│   └── useNotes.js    → Notes CRUD + localStorage
├── utils/
│   ├── storage.js     → localStorage helpers
│   ├── pomodoroDialogue.js → 5-level escalating messages
│   └── pastaSprites.js    → 10 sprite definitions (SVG)
└── App.jsx            → Main orchestrator
```

## 🤖 Agent Team

This project is built by a team of four AI agents:

| Agent | Role | Skill |
|-------|------|-------|
| 🛠️ Developer | Code, features, releases | `.github/skills/developer-agent.md` |
| 🧪 Tester | E2E testing, bug discovery | `.github/skills/tester-agent.md` |
| 🎨 Designer | Sprites, UI, dialogue | `.github/skills/designer-agent.md` |
| 📖 Documentation | User docs, changelogs | `.github/skills/documentation-agent.md` |

## 📦 Tech Stack

- **React 19** + **Vite**
- **TipTap** — Rich text editor
- **Recharts** — Charts
- **Playwright** + **FFmpeg** — Demo recording
- **localStorage** — Persistence (no backend needed)

## 📄 License

MIT
