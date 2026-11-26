import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@ciamix/ui/global.css'
import '@ciamix/ui/styles.css'
import './catalog.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
