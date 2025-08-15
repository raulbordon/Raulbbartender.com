import { NavLink, useLocation } from 'react-router-dom'

const labelMap = {
  '': 'Inicio',
  'sobre-mi': 'Sobre mí',
  'servicios': 'Servicios',
  'paquetes': 'Paquetes',
  'consultoria': 'Consultoría',
  'formacion': 'Formación',
  'testimonios': 'Testimonios',
  'contacto': 'Contacto',
}

export default function Breadcrumbs() {
  const { pathname } = useLocation()
  const parts = pathname.replace(/^\/+/, '').split('/').filter(Boolean)

  // no mostramos breadcrumbs en Home
  if (parts.length === 0) return null

  const crumbs = [{ to: '/', label: labelMap[''] }, ...parts.map((p, i) => {
    const to = '/' + parts.slice(0, i + 1).join('/')
    return { to, label: labelMap[p] || p }
  })]

  return (
    <div className="bg-body-tertiary border-bottom py-2">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1
              return (
                <li key={c.to} className={`breadcrumb-item ${isLast ? 'active' : ''}`} aria-current={isLast?'page':undefined}>
                  {isLast ? c.label : <NavLink to={c.to} className="text-decoration-none">{c.label}</NavLink>}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </div>
  )
}
