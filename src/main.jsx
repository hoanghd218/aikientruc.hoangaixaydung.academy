import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { clarity } from '@microsoft/clarity'
import './index.css'
import App from './App.jsx'

// Initialize Microsoft Clarity
const projectId = "uegs5kjw3t"
clarity.init(projectId)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
