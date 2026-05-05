# Medora Admin Frontend

Medora Admin is a React and TypeScript frontend for managing clinic appointments from an admin dashboard. The interface is built with Vite, Tailwind CSS, React Router, TanStack Query, Axios, and lucide-react icons.

## Frontend Overview

The frontend provides a responsive administration panel for clinic staff. It includes pages for the dashboard, doctors, appointments, schedule, notifications, appointment history, admin profile, login, and registration. Admin users can view daily appointment activity, manage doctor records, update appointment statuses, postpone appointments, and track notifications.

Data is currently served from local mock data through a simulated API layer in `src/services/api.ts`. TanStack Query is used to fetch and update this data, which keeps the UI behavior close to how it would work with a real backend API.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Axios
- lucide-react

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
