# Bet On You — Responsive App

A responsive web implementation of the "Bet On You" Figma design, built with React + Vite + TypeScript + Tailwind CSS. The design language (Geist typography, cream→lavender gradients, soft pastels, rounded cards, iOS-style chrome) is preserved exactly as in the mockups, and the layout scales gracefully from narrow phones up to desktop — where the app is shown inside a phone-sized canvas matching the Figma artboard (375×812).

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Screens currently implemented

- `/` — **Splash** (auto-forwards to onboarding after ~2s)
- `/onboarding` — **3-step onboarding** with interactive step switcher (map preview, bet-card preview, calendar preview)
- `/home` — **Home** with two tabs: feed of bets, and a colorful predictive heatmap
- `/bet/:id` — **Bet detail** with a cheer-to-toggle CTA and progress timeline

## Project layout

```
src/
  components/        # Reusable chrome (status bar, home indicator, phone frame, logo)
  screens/           # One file per screen
  App.tsx            # Router wiring
  index.css          # Tailwind + design-token based components
tailwind.config.js   # Colors, typography, radii, shadows, gradients pulled from Figma
```

## Design tokens

All colors, fonts, and radii live in `tailwind.config.js` under `theme.extend`. To match additional Figma variables as they're added, extend that file rather than hardcoding values in components.
