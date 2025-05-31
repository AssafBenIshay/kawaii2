import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <small>All rights reserved to <a href='https://github.com/AssafBenIshay/kawaii2'><b>Assaf Ben-Ishay</b></a> 2025.</small>

  </StrictMode>,
)
