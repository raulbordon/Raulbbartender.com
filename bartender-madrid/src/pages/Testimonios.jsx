import { Container, Row, Col } from 'react-bootstrap'

export default function Testimonios() {
  const testimonios = [
    {
      autor: "Andrei Ungureanu · Manager de Capital Mabel y Evranto",
      texto: `“Raúl demostró ser un excelente bartender, comprometido, responsable y respetuoso.
      Trabaja duro, crea cócteles y recetas con dedicación y siempre busca mejorar.
      En la apertura de Evranto, creó desde cero una carta de cócteles de estilo mediterráneo,
      logrando una propuesta única y rentable.”`
    },
    {
      autor: "Freidun Monciatti · Bar Manager Fisher’s Madrid",
      texto: `“Raúl tiene una gran capacidad de trabajo en equipo, creatividad y atención al cliente excepcionales.
      Durante su tiempo con nosotros elevó el nivel del bar con ideas frescas y servicio impecable.”`
    },
    {
      autor: "Manifesto13 · Madrid",
      texto: `En Manifesto13, Raúl implementó una estrategia de carta bajo filosofía 0-Waste,
      con rotación temporal de ingredientes y coctelería de autor.
      Esta propuesta incrementó la facturación del bar y fue reconocida por su originalidad y sostenibilidad
      en el panorama de coctelería madrileña.`
    }
  ]

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
            <h2 className="fw-bold">Testimonios</h2>
            <p className="text-muted">
              Opiniones y experiencias reales de quienes han trabajado conmigo.
            </p>
          </Col>
        </Row>

        {/* Lista de testimonios */}
        <Row className="gy-4">
          {testimonios.map((t, i) => (
            <Col md={4} key={i}>
              <div 
                className="p-4 h-100"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <blockquote className="blockquote text-light mb-3" style={{ fontStyle: 'italic' }}>
                  “{t.texto}”
                </blockquote>
                <footer className="blockquote-footer text-muted">{t.autor}</footer>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Efecto hover */}
      <style>{`
        .p-4:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  )
}
