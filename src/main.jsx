import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import { ProviderFavorites } from './ProviterFavorites.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProviderFavorites>
        <App />
      </ProviderFavorites>
    </BrowserRouter>
  </StrictMode>,
)
