import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './globalStyles'
import './index.css'
import Routes from './routes/Router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Routes />
  </StrictMode>,
)
