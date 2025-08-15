import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { FaClipboardCheck, FaBoxes, FaUsers, FaBook } from 'react-icons/fa'

export default function Consultoria() {
  const [ingresos, setIngresos] = useState('')
  const [costes, setCostes] = useState('')
  const [resultado, setResultado] = useState(null)
  const [interpretacion, setInterpretacion] = useState('')

  const calcularROI = () => {
    if (!ingresos || !costes || parseFloat(costes) === 0) return

    const roi = ((parseFloat(ingresos) - parseFloat(costes)) / parseFloat(costes)) * 100
    const roiFixed = roi.toFixed(1)
    setResultado(roiFixed)

    // Interpretación del ROI
    let mensaje = ''
    if (roi < 0) {
      mensaje = 'Actualmente estás perdiendo dinero, pero hay margen para revertirlo.'
    } else if (roi >= 0 && roi < 15) {
      mensaje = 'Rentabilidad baja, hay mucho potencial de mejora.'
    } else if (roi >= 15 && roi <= 35) {
      mensaje = 'Rentabilidad aceptable, pero se puede optimizar más.'
    } else {
      mensaje = 'Negocio muy rentable, con margen de perfeccionamiento.'
    }
    setInterpretacion(mensaje)
  }

  const proceso = [
    {
      icon: <FaClipboardCheck size={36} className="text-accent service-icon" />,
      titulo: 'Auditoría inicial',
      desc: 'Revisión de carta, flujo de trabajo y compras para detectar mejoras.',
    },
    {
      icon: <FaBoxes size={36} className="text-accent service-icon" />,
      titulo: 'Optimización de stock',
      desc: 'Escandallos precisos y rotación eficiente de productos.',
    },
    {
      icon: <FaUsers size={36} className="text-accent service-icon" />,
      titulo: 'Formación de equipo',
      desc: 'Técnicas y servicio adaptados a tu concepto de negocio.',
    },
    {
      icon: <FaBook size={36} className="text-accent service-icon" />,
      titulo: 'Manuales y estándares',
      desc: 'Protocolos claros para mantener calidad y consistencia.',
    },
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
          <Col md={8} className="mx-auto">
            <h2 className="fw-bold">Consultoría de Barra</h2>
            <p className="text-muted">
              Desde la carta hasta el acuerdo con marcas, te acompaño para optimizar tu barra y aumentar márgenes.
            </p>
          </Col>
        </Row>

        {/* Proceso */}
        <Row className="gy-4 mb-5">
          {proceso.map((p, i) => (
            <Col md={3} sm={6} xs={12} key={i} className="text-center">
              <div 
                className="p-4 h-100 service-card"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div className="mb-3">{p.icon}</div>
                <h6 className="fw-semibold">{p.titulo}</h6>
                <p className="text-muted">{p.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Calculadora ROI */}
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h4 className="fw-bold mb-3">Calcula tu ROI estimado</h4>
            <p className="text-muted">
              El <strong>ROI</strong> (Return on Investment o Retorno de la Inversión) mide la rentabilidad de tu negocio
              comparando los beneficios obtenidos frente a la inversión realizada.  
              En consultoría de barra, mejorar tu ROI significa:
            </p>
            <ul className="text-muted mb-4">
              <li>Reducir costes operativos sin perder calidad.</li>
              <li>Aumentar ingresos con cartas más rentables.</li>
              <li>Optimizar ingredientes para minimizar mermas.</li>
              <li>Mejorar la eficiencia del equipo para servir más en menos tiempo.</li>
            </ul>
            <p className="text-muted">
              Con mi metodología, muchos negocios aumentan su ROI hasta un <strong>35%</strong> en pocos meses.
            </p>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Ingresos mensuales (€)</Form.Label>
                <Form.Control
                  type="number"
                  value={ingresos}
                  onChange={(e) => setIngresos(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Costes mensuales (€)</Form.Label>
                <Form.Control
                  type="number"
                  value={costes}
                  onChange={(e) => setCostes(e.target.value)}
                />
              </Form.Group>
              <Button variant="outline-light" onClick={calcularROI}>
                Calcular ROI
              </Button>
            </Form>
            {resultado !== null && (
              <div className="mt-3">
                <p>Tu ROI estimado es del <strong>{resultado}%</strong></p>
                <p className="text-muted">{interpretacion}</p>
              </div>
            )}
          </Col>
          <Col md={6} className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Consultoría de barra"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>

        {/* CTA final */}
        <Row className="text-center mt-5">
          <Col>
            <h4 className="fw-bold mb-3">¿Listo para optimizar tu barra?</h4>
            <Button href="/contacto" size="lg" variant="outline-light">
              Solicitar diagnóstico
            </Button>
          </Col>
        </Row>
      </Container>

      {/* CSS efecto hover */}
      <style>{`
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        .service-card:hover .service-icon {
          animation: shine 1.2s linear forwards;
        }
        @keyframes shine {
          0% { filter: brightness(1) drop-shadow(0 0 0 rgba(0, 217, 255, 0)); }
          50% { filter: brightness(1.5) drop-shadow(0 0 8px rgba(0, 217, 255, 0.8)); }
          100% { filter: brightness(1) drop-shadow(0 0 0 rgba(0, 217, 255, 0)); }
        }
      `}</style>
    </section>
  )
}
