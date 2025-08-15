import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaChalkboardTeacher, FaUsers, FaClipboardList, FaBolt, FaGlassMartiniAlt, FaBookOpen } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export default function Formaciones() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200)
  }, [])

  const modulos = [
    {
      icon: <FaChalkboardTeacher size={40} className="text-accent" />,
      titulo: 'Formación práctica in-company',
      desc: 'Entreno a tu equipo en su propio entorno, aplicando técnicas modernas adaptadas a vuestra carta.',
    },
    {
      icon: <FaClipboardList size={40} className="text-accent" />,
      titulo: 'Estandarización de procesos',
      desc: 'Protocolos claros, mise en place eficiente y control de calidad para una barra que fluye.',
    },
    {
      icon: <FaBolt size={40} className="text-accent" />,
      titulo: 'Velocidad y rendimiento',
      desc: 'Técnicas para reducir tiempos de servicio y aumentar la producción manteniendo calidad.',
    },
    {
      icon: <FaGlassMartiniAlt size={40} className="text-accent" />,
      titulo: 'Creatividad rentable',
      desc: 'Crea cócteles atractivos, fáciles de ejecutar y con márgenes óptimos para tu negocio.',
    },
    {
      icon: <FaUsers size={40} className="text-accent" />,
      titulo: 'Trabajo en equipo',
      desc: 'Refuerza comunicación y cohesión para mejorar ambiente y eficiencia.',
    },
    {
      icon: <FaBookOpen size={40} className="text-accent" />,
      titulo: 'Historia y cultura de la coctelería',
      desc: 'Conoce el origen de los cócteles clásicos, la evolución de las tendencias y el impacto cultural de las bebidas en la gastronomía.',
    },
  ]

  return (
    <>
      {/* Hero con imagen */}
      <section
        style={{
          background: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat`,
          padding: '140px 0 100px',
          position: 'relative',
          color: 'white'
        }}
      >
        {/* Capa oscura */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 0
          }}
        ></div>

        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="text-center">
            <Col md={{ span: 8, offset: 2 }}>
              <div className={`fade-in ${fadeIn ? 'show' : ''}`}>
                <h1 className="fw-bold display-4">Formaciones para Equipos de Barra</h1>
                <p className="lead">
                  Entrenamientos prácticos y efectivos para que tu equipo alcance un nuevo nivel en técnica, velocidad y creatividad.  
                  He creado más de <strong>250 cócteles</strong>, diseñado <strong>20 cartas</strong> y formado <strong>3 equipos completos</strong>.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido principal */}
      <section
        className="section-dark"
        style={{
          background: 'linear-gradient(135deg, rgba(0,217,255,0.05), rgba(0,255,170,0.05))',
          padding: '60px 0'
        }}
      >
        <Container>
          <Row className="gy-4">
            {modulos.map((m, i) => (
              <Col md={4} key={i} className="text-center">
                <div
                  className="p-4 h-100 service-card"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  <div className="mb-3">{m.icon}</div>
                  <h5 className="fw-semibold">{m.titulo}</h5>
                  <p className="text-muted">{m.desc}</p>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="text-center mt-5">
            <Col>
              <h4 className="fw-bold mb-3">¿Quieres que tu equipo marque la diferencia?</h4>
              <Button href="/contacto" size="lg" variant="outline-light">
                Solicitar formación
              </Button>
            </Col>
          </Row>
        </Container>

        <style>{`
          .service-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }

          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 1s ease, transform 1s ease;
          }

          .fade-in.show {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </section>
    </>
  )
}
