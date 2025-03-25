import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './assets/training/IncreaseCounterApp.tsx'
import ToDoApp from './assets/training/ToDoApp.tsx'
import IncreaseCounterApp2 from './assets/training/IncreaseCounterApp2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IncreaseCounterApp2 />
  </StrictMode>
)
