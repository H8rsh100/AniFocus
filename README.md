# ⛩️ AniFocus | アニフォーカス
> A High-Fidelity Cyberpunk Manga Editorial War Room and Focus Tracker.

---

## 👁️ Visual Identity & Design System
AniFocus is not another standard bootstrap dashboard. It is a high-information, sharp-edged manga editorial war room designed with an obsessive eye for detail.

* **Halftone Matrix Overlay**: Radial-gradient dotted screen textures mimicking traditional manga printing press screens.
* **CJK Vertical Hanko Stamps**: Rotating vertical Japanese seal strips (`見習い`, `中級者`, `上級者`, `オタク神`) acting as rank medals.
* **9 Custom CSS Aura Classes**: Each anime card glows with a unique genre-matching aura:
  * 🔴 **Chainsaw Man** — Shaking neon-orange/red aura
  * 🟣 **Solo Leveling** — Pulsing dark-violet monarch glow
  * 🔵 **Cyberpunk** — Cyan/magenta glitch offset
  * 🔴 **Demon Slayer** — Crimson-orange solar aura
  * 🔵 **Jujutsu Kaisen** — Flickering deep blue cursed energy
  * ⚪ **Bleach** — White-blue sharp reiatsu outline
  * 🟡 **Frieren** — Soft elegant golden mana glow
  * 🟢 **Evangelion** — Green-purple toxic bio-glow
  * ⬛ **Normal** — Minimalist dark frame with red hover
* **Typography**: Uppercase, tracked-wide, ultra-bold Bebas Neue headings with Space Grotesk body text.

---

## ⚡ Technical Capabilities

### 1. Smart Autocomplete Database Search & Manual Prefill Form
* **Minimum Input Trigger**: Activates dynamically at `2+` letters to search 78+ anime titles and releases.
* **Smart Movie/OVA Parser**: Automatically detects specials, movies, or OVAs, setting their total episode count to `1` (e.g. *Jujutsu Kaisen 0* is parsed as `1 Movie` instead of defaulting to 12).
* **Collapsing Suggestions Drawer**: Clicking `SELECT` on any release automatically populates the manual configuration form and closes the autocomplete panel instantly.
* **Granular Priority & List Selection**: Prefilled fields let you choose between **Active Watching**, **Plan to Watch** (with Kanban priorities: High, Interested, Maybe Later), or **Completed Collection** statuses before importing.

### 2. Focus Chamber (Binaural Beats & Brownian Noise Synthesizer)
* **Progress Visualization**: Features an elegant circular SVG progress ring displaying active series completion percentage.
* **Real-time Synthesis**: No static MP3 files. Uses the **Web Audio API** to procedurally synthesize a binary soundscape:
  * **Theta Binaural Beats**: Dual sine wave oscillators (130Hz Left / 134Hz Right) generating a 4Hz brainwave rhythm to enhance concentration.
  * **Deep Brownian Noise**: Algorithmic accumulation buffer generating analog deep waterfall noise for environmental masking.
* **Tab-Switch Penalty**: Leaving the focus tab deducts -30 XP and triggers an audio alarm.
* **Active State Sync**: Exiting Focus Mode seamlessly navigates you back to the Dashboard while preserving your active target as the **Continue Watching** focus series.

### 3. Gamified Otaku Ranks & Trophy Room
* Features dynamic rank calculation based on accumulated session XP:
  * **見習い** (Apprentice) — `0 - 499 XP`
  * **中級者** (Intermediate) — `500 - 1999 XP`
  * **上級者** (Advanced) — `2000 - 4999 XP`
  * **オタク神** (Otaku God) — `5000+ XP`
* **Trophy Room**: Tracks all completed series with genre-based aura effects, completion dates, ratings, and reviews.
* **Franchise Consolidation**: Automatically merges completed entries from the same franchise (Jujutsu Kaisen, Demon Slayer, Solo Leveling, Bleach, Naruto) into gold Franchise Mastery cards.

### 4. Statistics Dashboard
* **Real Monthly Trends**: Tracks episodes logged per month from actual watch history data.
* **Genre Distribution Radar**: Visualizes genre breakdown across active and completed series.
* **Completion Rate Gauge**: Real completion ratio with dynamic insight labels.
* **Personal Insights**: Favorite genre, average rating, streak, and total episodes — all calculated from real data.

### 5. Anime Graveyard
* Dropped series are archived with an animated revive mechanic.
* Reviving restores the series to Active Watching and awards +50 XP.

---

## 🛠️ Project Structure
```bash
src/
├── app/
│   ├── globals.css      # Core Design Tokens, Halftones, 9 CSS Auras, Keyframes
│   ├── layout.tsx       # Root Layout & Metadata
│   └── page.tsx         # Main Controller, State Management, Tab Routing
├── components/
│   ├── Sidebar.tsx      # Navigation, XP Bar, Profile Card
│   ├── Dashboard.tsx    # Continue Watching, Active Grid, Kanban Board
│   ├── FocusMode.tsx    # Progress Ring, Web Audio Synth, Binaural Beats
│   ├── TrophyRoom.tsx   # Completed Collection, Franchise Mastery, Achievements
│   ├── Statistics.tsx   # Recharts Analytics, Real Watch Data
│   ├── Graveyard.tsx    # Dropped Series with Revive Mechanic
│   ├── AnimeDetailModal.tsx  # Detail View with Tabs (Info, AI Insights, Reviews)
│   └── LandingHero.tsx  # Public Splash Page (unused in current build)
├── data/
│   ├── animeDatabase.ts # Registry of 78 preloaded series and movies
│   └── initialData.ts   # Otaku Rank boundaries, Achievements & profile starters
└── types/
    └── anime.ts         # AnimeItem, UserProfile, Achievement typings
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

## 🌐 Continuous Deployment
This codebase is fully type-safe and verified for continuous integration.
* **Netlify**: Connect your GitHub repository, set Build Command to `npm run build`, and Publish Directory to `.next`. Every commit push to `master` will trigger an automated build.
* **Vercel**: Connect your GitHub repository — auto-detects Next.js and deploys on every push to `master`.

---

## 🧰 Tech Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Charts | Recharts 3 |
| Animation | Framer Motion, canvas-confetti |
| Icons | Lucide React |
| Audio | Web Audio API (procedural synthesis) |
| Persistence | LocalStorage |
