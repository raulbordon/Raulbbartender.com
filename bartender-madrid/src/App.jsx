import { Outlet, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { FaEnvelope, FaInstagram } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export const me = {
  name: 'Raúl Bordón Prieto',
  brand: 'Raúl Bordón – Bartender & Consultor',
  email: 'raulbbartendedr@hotmail.com',
  instagram: 'raulbbartender',
  focus: ['Consultoría', 'Cartas de coctelería', 'Formación', 'Páginas web'],
}

export default function App() {
  const links = [
    ['Sobre mí', '/sobre-mi'],
    ['Servicios', '/servicios'],
    ['Inspiración', '/inspiracion-estilo'],
    ['Consultoría', '/consultoria'],
    ['Formación', '/formacion'],
    ['Testimonios', '/testimonios'],
    ['Contacto', '/contacto'],
  ]

  return (
    <div className="site-dark">
      {/* Navbar */}
      <Navbar expand="lg" className="custom-navbar sticky-top" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fw-bold brand-accent">
            {me.brand}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" className="custom-toggler" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-lg-center">
              {links.map(([label, to]) => (
                <Nav.Link
                  as={NavLink}
                  to={to}
                  key={to}
                  className="nav-link-dark"
                >
                  {label}
                </Nav.Link>
              ))}

              {/* Botón Email */}
              <Button
                href={`mailto:${me.email}`}
                className="ms-lg-2 d-flex align-items-center"
                style={{
                  backgroundColor: '#007bff',
                  border: 'none',
                  fontWeight: '500'
                }}
              >
                <FaEnvelope size={18} className="me-2" />
                Email
              </Button>

              {/* Botón Instagram */}
              <Button
                href={`https://instagram.com/${me.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="ms-lg-2 d-flex align-items-center"
                style={{
                  backgroundColor: '#E1306C',
                  border: 'none',
                  fontWeight: '500'
                }}
              >
                <FaInstagram size={18} className="me-2" />
                Instagram
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenido */}
      <Outlet />

      {/* Footer */}
      <footer className="custom-footer">
        <div className="container d-flex flex-column flex-md-row justify-content-between small">
          <span>© {new Date().getFullYear()} {me.brand}</span>
          <span>{me.city} · España</span>
        </div>
      </footer>
    </div>
  )
}
