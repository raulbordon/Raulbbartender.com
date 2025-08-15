import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MainNavbar() {
  return (
    <Navbar expand="lg" className="navbar-dark custom-navbar py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Raúl Bordon
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/sobre-mi">Sobre mí</Nav.Link>
            <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/formacion">Formación</Nav.Link>
            <Nav.Link as={Link} to="/inspiracion">Inspiración & Estilo</Nav.Link>
            <Nav.Link as={Link} to="/testimonios">Testimonios</Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="btn-contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
