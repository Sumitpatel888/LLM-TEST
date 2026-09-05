# Smart Task Manager — FS 36 Mini Hackathon

A production-style React To-Do / Smart Task Manager built for the Sheryians Coding School FS 36 Mini Hackathon.

## Live demo
https://sumitpatel888.github.io/LLM-TEST/

## Requirements covered
- useState, useEffect, useContext, useCallback, useRef
- React Router: `/`, `/completed`, `/stats`, dynamic `/task/:id`
- Route-based filtering and task detail navigation
- localStorage persistence across refreshes
- Dedicated Axios instance with `axios.create()` and segregated API service
- Add, edit, delete, complete/incomplete
- Search and sort
- Responsive clean UI

## Project source
The complete hackathon source is inside `YourName_FS36_TodoHackathon/` with a clean React/Vite structure.

## Run locally
`cd YourName_FS36_TodoHackathon`

`npm install`

`npm run dev`

## Build
`npm run build`

The API layer seeds a few starter tasks once; working data is persisted in localStorage.