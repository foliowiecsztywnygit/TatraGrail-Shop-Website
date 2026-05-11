import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n'

// Główne wejście stylów (Tailwind)
import '../css/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)