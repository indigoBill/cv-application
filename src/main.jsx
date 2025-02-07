import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import ResumeEditor from './ResumeEditor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      //<App />
    }
    <ResumeEditor />
  </StrictMode>,
)
