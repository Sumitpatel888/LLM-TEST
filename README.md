# Smart Task Manager — FS 36 Mini Hackathon

A production-style React To-Do / Smart Task Manager built for the Sheryians Coding School FS 36 Mini Hackathon.

## Requirements covered
- useState, useEffect, useContext, useCallback, useRef
- React Router: `/`, `/completed`, `/stats`, dynamic `/task/:id`
- Route-based filtering and task detail navigation
- localStorage persistence across refreshes
- Dedicated Axios instance with `axios.create()` and segregated API service
- Add, edit, delete, complete/incomplete
- Search and sort
- Responsive clean UI

## Run locally
`npm install` then `npm run dev`

## Build
`npm run build`

## Structure
`YourName_FS36_TodoHackathon/src/{api,components,context,hooks,pages}`

The API layer seeds a few starter tasks once; working data is persisted in localStorage.