import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TodoProvider } from './context/TodoContext'
import './styles.css'
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter basename="/LLM-TEST/YourName_FS36_TodoHackathon"><TodoProvider><App /></TodoProvider></BrowserRouter></React.StrictMode>)