// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css' // asegúrate del nombre/case correcto

import App from './App.jsx'            // 👈 FALTABA ESTE IMPORT

import Home from './pages/Home.jsx'
import SobreMi from './pages/SobreMi.jsx'
import Servicios from './pages/Servicios.jsx'
import Formacion from './pages/Formacion.jsx'
import Testimonios from './pages/Testimonios.jsx'
import Contacto from './pages/Contacto.jsx'
import InspiracionEstilo from './pages/InspiracionEstilo.jsx'
// Si NO tienes este archivo, comenta tanto este import como su ruta:
import Consultoria from './pages/Consultoria.jsx'  // o comenta esta línea

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre-mi', element: <SobreMi /> },
      { path: 'servicios', element: <Servicios /> },
      { path: 'formacion', element: <Formacion /> },
      { path: 'testimonios', element: <Testimonios /> },
      { path: 'contacto', element: <Contacto /> },

      // Ruta real
      { path: 'inspiracion-estilo', element: <InspiracionEstilo /> },

      // Alias/redirects
      { path: 'inspiracion', element: <Navigate to="/inspiracion-estilo" replace /> },
      { path: 'inspiración', element: <Navigate to="/inspiracion-estilo" replace /> },

      // Solo si existe el archivo Consultoria.jsx
      { path: 'consultoria', element: <Consultoria /> },

      // Catch-all
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
