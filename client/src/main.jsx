import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeContext,DarkModeProvider } from './context/darkModeContext'
import { AuthContextProvider } from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
  </DarkModeProvider>
  </React.StrictMode>,
)
