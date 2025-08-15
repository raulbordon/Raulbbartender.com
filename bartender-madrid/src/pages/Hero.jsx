import { Container, Button, Row, Col } from 'react-bootstrap'
import { FaGlassCheers, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa'

export default function Home() {
  return (
    <section className="section-dark text-center">
      <Container>
        <h1 className="display-3 fw-bold mb-3">Raúl Bordon</h1>
        <p className="lead mb-4">Bartender, consultor y formador</p>
        <Row className="mt-4">
          <Col md={4}><FaGlassCheers size={32} className="text-accent mb-2" /><h4>Cócteles</h4></Col>
          <Col md={4}><FaChartLine size={32} className="text-accent mb-2" /><h4>Consultoría</h4></Col>
          <Col md={4}><FaChalkboardTeacher size={32} className="text-accent mb-2" /><h4>Formación</h4></Col>
        </Row>
        <Button variant="outline-light" size="lg" href="/contacto" className="mt-4">Reserva una consulta</Button>
      </Container>
    </section>
  )
}
