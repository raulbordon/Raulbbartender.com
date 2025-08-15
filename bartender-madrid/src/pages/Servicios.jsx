import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaCocktail, FaLightbulb, FaClipboardList, FaUsers, FaLeaf, FaGlobe, FaTools } from 'react-icons/fa'

export default function Servicios() {
  const servicios = [
    {
      icon: <FaCocktail size={40} className="text-accent service-icon" />,
      titulo: 'Diseño de carta de cócteles',
      desc: 'Cartas rentables con identidad propia. Escandallos, fichas técnicas y rotación de producto para mejorar margen y reducir mermas.',
    },
    {
      icon: <FaLightbulb size={40} className="text-accent service-icon" />,
      titulo: 'Consultoría integral de barra',
      desc: 'Análisis de flujo de trabajo, equipamiento y operativa para maximizar velocidad de servicio y consistencia.',
    },
    {
      icon: <FaClipboardList size={40} className="text-accent service-icon" />,
      titulo: 'Estandarización y procesos',
      desc: 'Mise en place, batching, control de calidad y guías de trabajo para tu equipo.',
    },
    {
      icon: <FaUsers size={40} className="text-accent service-icon" />,
      titulo: 'Formación in-company',
      desc: 'Sesiones prácticas adaptadas a tu equipo y carta, con simulación de servicio real.',
    },
    {
      icon: <FaLeaf size={40} className="text-accent service-icon" />,
      titulo: '0-Waste & Comida líquida',
      desc: 'Recetas y técnicas para reducir residuos y transformar platos icónicos en experiencias líquidas.',
    },
    {
      icon: (
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
          <FaGlobe size={36} className="text-accent service-icon" />
          <FaTools size={28} className="text-accent service-icon" />
        </div>
      ),
      titulo: 'Creación y mantenimiento web',
      desc: 'Diseño y desarrollo de página web profesional para tu negocio, con opción de mantenimiento mensual para actualizaciones y mejoras.',
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
          <Col>
            <h2 className="fw-bold">Servicios</h2>
            <p className="text-muted">
              Desde la idea hasta el servicio. Cada propuesta se adapta a tu local, público y objetivos de negocio.
            </p>
          </Col>
        </Row>

        {/* Lista de servicios */}
        <Row className="gy-4">
          {servicios.map((s, i) => (
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
                <div className="mb-3">{s.icon}</div>
                <h5 className="fw-semibold">{s.titulo}</h5>
                <p className="text-muted">{s.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA final */}
        <Row className="text-center mt-5">
          <Col>
            <h4 className="fw-bold mb-3">¿Listo para llevar tu negocio al siguiente nivel?</h4>
            <Button 
              href="/contacto" 
              size="lg" 
              variant="outline-light"
            >
              Pedir propuesta
            </Button>
          </Col>
        </Row>
      </Container>

      {/* CSS inline para efecto hover */}
      <style>{`
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        /* Efecto brillo animado en iconos */
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
