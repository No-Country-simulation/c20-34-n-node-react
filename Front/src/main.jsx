import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FloorsProvider } from './context/FloorsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FloorsProvider>
      <App />
    </FloorsProvider>
  </StrictMode>,
)
