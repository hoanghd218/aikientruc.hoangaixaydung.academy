import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import clarity from '@microsoft/clarity'
import './index.css'
import App from './App.jsx'
import ReactPixel from 'react-facebook-pixel';

// Initialize Microsoft Clarity
const projectId = "uegs5kjw3t"
clarity.init(projectId)

const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};

ReactPixel.init('1353685299464281', null, options);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
