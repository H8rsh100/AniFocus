# ⛩️ AniFocus | アニフォーカス
> A High-Fidelity Cyberpunk Manga Editorial War Room and Focus Tracker.

---

## 👁️ Visual Identity & Design System
AniFocus is not another standard bootstrap dashboard. It is a high-information, sharp-edged manga editorial war room designed with an obsessive eye for detail.

* **Halftone Matrix Overlay**: Radial-gradient dotted screen textures mimicking traditional manga printing press screens.
* **CJK Vertical Hanko Stamps**: Rotating vertical Japanese seal strips (`見習い`, `中級者`, `上級者`, `オタク神`) acting as rank medals.
* **9 Custom CSS Aura Classes**: Elements glow dynamically with interactive genre-matching speed lines:
  * 🔴 **Shonen Crimson** (`#e8003a`) — Action/Fighters
  * 🟡 **Seinen Gold** (`#f5c842`) — Slice of Life/Drama
  * 🟣 **Isekai Purple** (`#7b2fff`) — Fantasy/Magic
  * 🔵 **Mecha Blue** — Sci-Fi/Robots
  * 🟢 **Forest Green** — Adventure/Fantasy
  * 🟠 **Sports Orange** — Athletics/Competitive
  * 🟡 **Cinematic Rainbow** — Feature Movies
* **Display Typography**: Uppercase, tracked-wide, ultra-bold Bebas Neue headings.

---

## ⚡ Technical Capabilities

### 1. Instant Autocomplete Database (100+ Curated Series)
* **Minimum Input Trigger**: Activates dynamically at `2+` letters to prevent layout shift.
* **In-place Selection Expansion**: Parses series metadata (seasons, movies, specials, OVAs) and allows importing specific releases to the watch list in exactly **1-click**.

### 2. Focus Chamber (20m Countdown & Binaural Beats Synthesizer)
* **Real-time Synthesis**: No static MP3 files. Uses the **Web Audio API** to procedurally synthesize a binary soundscape:
  * **Theta Binaural Beats**: Dual sine wave oscillators (130Hz Left / 134Hz Right) generating a 4Hz brainwave rhythm to enhance concentration.
  * **Deep Brownian Noise**: Algorithmic accumulation buffer generating analog deep waterfall noise for environmental masking.
* **Tab-Switch Attention Tracker**: Active listeners monitor tab state. Leaving or switching tabs while the timer runs triggers a **−30 XP penalty** accompanied by a procedural sawtooth audio alert and a crimson flashing warning banner.

### 3. Gamified Otaku Ranks
Features dynamic rank calculation based on accumulated session XP:
* **見習い** (Apprentice) — `0 - 499 XP`
* **中級者** (Intermediate) — `500 - 1999 XP`
* **上級者** (Advanced) — `2000 - 4999 XP`
* **オタク神** (Otaku God) — `5000+ XP`

---

## 🛠️ Project Structure
```bash
src/
├── app/
│   ├── globals.css      # Core Design Tokens, Halftones, 9 CSS Auras, Keyframes
│   ├── layout.tsx       # Typography & Viewport Setup
│   └── page.tsx         # Console Controller, Autocomplete Registry, Tab Monitor
├── components/
│   ├── Sidebar.tsx      # Vertical Navigation Hub
│   ├── Dashboard.tsx    # Continue Watching & Kanban Category Columns
│   ├── FocusMode.tsx    # 20-minute Timer, Web Audio Synth, Binaural Nodes
│   ├── TrophyRoom.tsx   # Hanako Achievements Registry
│   ├── Statistics.tsx   # Progress Analytics charts
│   └── Graveyard.tsx    # Dropped series rehabilitation
├── data/
│   ├── animeDatabase.ts # Registry of 94 populated series and movies
│   └── initialData.ts   # Otaku Rank boundaries & profile starters
└── types/
    └── anime.ts         # UserProfile and KanbanCategory typings
```

---

## 🚀 Quick Start (Local Run)

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Run the development server**:
   ```bash
   npm run dev
   ```
3. **Build optimized production bundle**:
   ```bash
   npm run build
   ```

---

## 🌐 Continuous Deployment (Netlify & Vercel)
This codebase is fully type-safe and verified for continuous integration.
* **To Deploy on Netlify**: Connect your GitHub repository, set Build Command to `npm run build`, and Publish Directory to `.next`. Every commit push to `master` will trigger an automated build!
