import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa'

export default function Contacto() {
  return (
    <section
      className="section-dark"
      style={{
        background: 'linear-gradient(135deg, rgba(0,217,255,0.05), rgba(0,255,170,0.05))',
        padding: '60px 0'
      }}
    >
      <Container>
        {/* Encabezado */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">Contacto</h2>
            <p className="text-muted">
              Pide presupuesto, consulta disponibilidad o plantea tu idea para llevarla a la barra.
            </p>
          </Col>
        </Row>

        {/* Contenido */}
        <Row className="gy-5">
          {/* Formulario */}
          <Col md={6}>
            <div
              className="p-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            >
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light">Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Tu nombre" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-light">Email</Form.Label>
                  <Form.Control type="email" placeholder="tu@email.com" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="text-light">Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Cuéntame tu proyecto" />
                </Form.Group>
                <Button variant="outline-light" size="lg" type="submit" style={{ width: '100%' }}>
                  Enviar mensaje
                </Button>
              </Form>
            </div>
          </Col>

          {/* Información de contacto */}
          <Col md={6} className="d-flex flex-column justify-content-center">
            <div className="mb-4">
              <h4 className="fw-bold text-light mb-3">Datos de contacto</h4>
              <p className="text-muted">
                Si prefieres, puedes escribirme o seguirme en redes directamente:
              </p>
            
              <p className="mb-2">
                <FaEnvelope className="text-accent me-2" />
                <a href="mailto:raulbbartendedr@hotmail.com" className="text-light text-decoration-none">
                  raulbbartendedr@hotmail.com
                </a>
              </p>
              <p>
                <FaInstagram className="text-accent me-2" />
                <a
                  href="https://www.instagram.com/raulbbartender"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  @raulbbartender
                </a>
              </p>
            </div>
            <div>
              <h4 className="fw-bold text-light mb-3">¿Por qué contactarme?</h4>
              <p className="text-muted">
                Más de 4 años creando experiencias únicas, cartas de autor y formaciones especializadas en coctelería
                sostenible. Desde la idea hasta el servicio final.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
