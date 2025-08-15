import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // scroll suave a arriba cada vez que cambia la ruta
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}
