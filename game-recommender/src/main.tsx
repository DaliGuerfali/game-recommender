import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import NotifContextProvider from './components/NotifContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NotifContextProvider>
      <App />
    </NotifContextProvider>
  </React.StrictMode>,
)
