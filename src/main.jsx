import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//importación del componente creado
import Contenido from './Contenido' 
import Input from './Input' 
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Input />
    <Contenido />
    <Contenido />
   
  </StrictMode>,
)
