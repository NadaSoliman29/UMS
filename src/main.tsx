import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import App from './App.tsx'
import AuthContextProvider from './Components/context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <StrictMode>
    <App />
  </StrictMode>,
  </AuthContextProvider>
)
