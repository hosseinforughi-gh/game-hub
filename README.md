# Game Hub — RAWG Games Explorer

A modern game discovery web app built with **React + TypeScript** that lets users browse, search, filter, and explore game details using the **RAWG API**.

**Live Demo:** https://hf-game-hub.vercel.app
**Repository:** https://github.com/hosseinforughi-gh/game-hub

---

## What this project demonstrates (Resume Highlights)

- Building a **production-style React app** with clean component structure and reusable UI
- Data fetching & caching with **TanStack React Query** (loading states, caching, refetching)
- Global state management with **Zustand** (filters / UI state)
- Client-side routing with **React Router** (list → details flow)
- Responsive, accessible UI using **Chakra UI**
- Infinite scrolling for large lists (better UX & performance)
- Theme support (**Dark/Light mode**) with `next-themes`
- Environment-based configuration (API key via Vite env vars)

---

## Features

- ✅ Browse games with **Infinite Scroll**
- ✅ Search games by name
- ✅ Filter by **Genre** and **Platform**
- ✅ Sort results (e.g., popularity / rating)
- ✅ Game details page:
  - description, metadata
  - trailers and screenshots
- ✅ Dark / Light mode

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tooling)
- **Chakra UI** (UI components)
- **TanStack React Query** (server-state / caching)
- **Zustand** (client-state)
- **React Router** (routing)
- **Axios** (HTTP)

---

## Architecture Notes

- **Server state** (games, genres, platforms, details) is handled via React Query for caching and predictable loading/error states.
- **UI / filter state** is managed with Zustand to avoid prop drilling and keep the filter logic centralized.
- Uses **Vite env vars** for configuration (`VITE_RAWG_API_KEY`) to keep keys out of the codebase.

---

## Deployment

Deployed on **Vercel**. Make sure to set this environment variable in Vercel:

- `VITE_RAWG_API_KEY`

> SPA routing: `vercel.json` includes a rewrite rule so refreshing nested routes won’t return 404.

---

<details>
  <summary><strong>Run Locally</strong></summary>

### 1) Install
```bash
npm install
