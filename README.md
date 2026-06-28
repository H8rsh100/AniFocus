<div align="center">

# ░█████╗░███╗░░██╗██╗███████╗░█████╗░░█████╗░██╗░░░██╗░██████╗
# ██╔══██╗████╗░██║██║██╔════╝██╔══██╗██╔══██╗██║░░░██║██╔════╝
# ███████║██╔██╗██║██║█████╗░░██║░░██║██║░░╚═╝██║░░░██║╚█████╗░
# ██╔══██║██║╚████║██║██╔══╝░░██║░░██║██║░░██╗██║░░░██║░╚═══██╗
# ██║░░██║██║░╚███║██║██║░░░░░╚█████╔╝╚█████╔╝╚██████╔╝██████╔╝
# ╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═╝░░░░░╚════╝░░╚════╝░░╚═════╝░╚═════╝░

### **Your personal otaku intelligence terminal.**
*Not a tracker. A war room.*

<br/>

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![LocalStorage](https://img.shields.io/badge/Persistence-localStorage-7c3aed?style=for-the-badge)
![No Libraries](https://img.shields.io/badge/UI_Libraries-ZERO-e8003a?style=for-the-badge)

<br/>

> Built from scratch because every anime tracker felt like a spreadsheet.  
> AniFocus feels like the medium it tracks.

</div>

---

## WHAT IS THIS

AniFocus is a personal anime tracking hub with a manga editorial visual identity. No generic dashboard grids. No card thumbnails fetched from APIs. No soft UI with rounded corners and drop shadows.

Instead: a dark halftone screentone background, vertical CJK ink-stamp strips, Bebas Neue chapter-title typography, and a living **Aura** system where every anime card has its own handcrafted CSS animated background — unique to that series, built in pure CSS, no images.

You start from zero. You build your own archive. The tracker becomes a personal gallery.

---

## THE AURA SYSTEM

Every card's background is a CSS animated effect unique to its series. This is the centerpiece of the whole app.

| Series | Aura |
|--------|------|
| **Solo Leveling** | Deep violet radial glow · slow monarch pulse · crown SVG watermark |
| **Chainsaw Man** | Orange-red flicker · card shakes 2px every 5s |
| **Attack on Titan** | Cold steel grey · horizontal white scan line sweeping top to bottom |
| **Death Note** | Dark crimson vignette · faint diagonal ruled-paper lines · oppressive stillness |
| **Jujutsu Kaisen** | Pure black · two blurred violet pseudo-elements rotating like cursed energy |
| **Demon Slayer** | Indigo-to-teal breathing pulse · flame shape at card bottom |
| **Cyberpunk: Edgerunners** | Cyan/magenta glitch · `clip-path` slice shifts every 3s |
| **Berserk** | Near-void black · Brand of Sacrifice SVG dripping red at 15% opacity |
| **Evangelion** | Warning stripe at card bottom · NERV technical overlay feel |
| **Frieren** | Silver-lavender · slow falling magic dust particle drift |
| **Cowboy Bebop** | Smoky brown · slow upward smoke drift pseudo-element |
| **Code Geass** | Blood red-black · Geass eye SVG pulsing · slow iris dilation |
| **Steins;Gate** | CRT green scanline overlay · time divergence meter display |
| **Mob Psycho 100** | Greyscale base · full-card violet flash every 5s — the `???` moment |
| **One Piece** | Warm navy-gold · rolling wave pseudo-element at card bottom |
| **Made in Abyss** | Abyss black · teal glow rising from card bottom · depth and dread |

*50+ auras total. Every series in the database has one.*

---

## FEATURES

**Full Series Registry — 100+ titles**  
Every entry is broken down completely. Not just the show — every season, movie, OVA, and special, each with episode count and type tag. Add exactly what you watched.

**Three-List Tracking**  
`WATCHING` · `COMPLETED` · `PLAN TO WATCH`  
Move entries between lists. Each list has its own empty state — no grey placeholder boxes.

**Episode Logging**  
Per-entry episode counter with a progress bar in the series accent color. Hit the final episode and get an inline completion prompt.

**Instant Search**  
Type 2 characters. Zero debounce. Results appear immediately. Click a series to expand its full entry breakdown in the detail panel. Add any specific season or movie to any list independently.

**Drag and Drop**  
Reorder your watchlist with native HTML5 drag-and-drop. No library. No dependency.

**Focus Mode**  
20-minute watch sessions with a binaural audio engine — synthesized entirely via the Web Audio API. No MP3 files. Pure math.

**Zero Demo Data**  
The app opens completely empty. No pre-populated cards. You build your archive from scratch.

**Full Persistence**  
Everything writes to `localStorage` on every state change. Reload anytime, nothing is lost.

---

## VISUAL IDENTITY

```
Background     →  #08080f + halftone screentone dots (radial-gradient, 4px grid, violet 12% opacity)
Strips         →  6 vertical 1px lines full viewport height with rotated CJK characters 力 覚 魂 界 戦 亜
Accent Red     →  #e8003a
Accent Gold    →  #f5c518
Accent Violet  →  #7c3aed
Accent Cyan    →  #00d4ff
Display Font   →  Bebas Neue — chapter titles, stat numbers, all headings
Body Font      →  Space Grotesk — metadata, descriptions
Data Font      →  JetBrains Mono — episode counts, type badges, progress numbers
Border Radius  →  4px maximum. Everywhere. No exceptions.
```

---

## TECH

```
Framework     Next.js + TypeScript
Styling       Tailwind CSS + custom @keyframes
Persistence   localStorage (SSR-safe hydration)
Drag & Drop   Native HTML5 Browser API
Audio         Web Audio API — OscillatorNode binaural synthesis + Brownian noise buffer
UI Libraries  None
```

---

## FOR DEVELOPERS — WHAT THIS CODEBASE TEACHES

This project is a real-world implementation of concepts most tutorials skip or abstract away with libraries.

| Concept | Location |
|---------|----------|
| Lifting state up + callback props | `page.tsx` |
| SSR-safe localStorage hydration with `hasMounted` | `page.tsx` mount effect |
| Dynamic CSS class binding from array data | `Dashboard.tsx` → `getAuraClassForAnime` |
| Custom animation `@keyframes` and CSS drop shadows | `globals.css` |
| Native HTML5 Drag and Drop — `dataTransfer`, `dragover`, `drop` | `Dashboard.tsx` |
| Web Audio API — `OscillatorNode`, channel merging, binaural tones | `FocusMode.tsx` → `startSynth` |
| Brownian noise generation via randomized `AudioBuffer` | `FocusMode.tsx` → `createBrownNoiseBuffer` |
| `.reduce()` for complex multi-key aggregation | `Statistics.tsx` |
| Chronological grouping and sorting of nested data | `TrophyRoom.tsx` |

---

## GETTING STARTED

```bash
git clone https://github.com/H8rsh100/anifocus
cd anifocus
npm install
npm run dev
```

Navigate to `http://localhost:3000` — the tracker opens empty. Start searching. Start adding. Build your archive.

---

## LAYOUT

```
┌──────────────────────────────────────────────────────────────┐
│  ANIFOCUS                WATCHING: 0   COMPLETED: 0   PTW: 0 │
├──────────────────────────────────────────────────────────────┤
│  SEARCH 100+ SERIES — TYPE TO BEGIN...                       │
├────────────────────────────┬─────────────────────────────────┤
│                            │                                 │
│  [ WATCHING ]              │  ▼ DEMON SLAYER                 │
│  [ COMPLETED ]             │  ───────────────────────────    │
│  [ PLAN TO WATCH ]         │  [ + ]  S1: Tanjiro  26ep  TV  │
│                            │  [ + ]  Mugen Train   1    Movie│
│  ┌────────────────────┐    │  [ + ]  S2: Entertain 11ep TV  │
│  │  SOLO LEVELING     │    │  [ ✓ ]  S3: Swordsmith ← WATCH │
│  │  S2: Arise from    │    │  [ + ]  S4: Hashira   8ep  TV  │
│  │  the Shadow        │    │                                 │
│  │  EP 08 / 13  ████░ │    │                                 │
│  │  [ − ]  [ + ]  ✕   │    │                                 │
│  └────────────────────┘    │                                 │
│                            │                                 │
└────────────────────────────┴─────────────────────────────────┘
```

---

<div align="center">

**Built by [@H8rsh100](https://github.com/H8rsh100)**  
[Instagram](https://instagram.com/_h8rshh)

*Because every other tracker felt like a spreadsheet.*

</div>
