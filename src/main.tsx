import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css';
import './assets/css/satoshi.css';
import App from './App'
import 'jsvectormap/dist/jsvectormap.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
