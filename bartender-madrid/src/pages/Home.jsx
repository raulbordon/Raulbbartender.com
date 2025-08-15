import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaWineGlassAlt, FaCogs, FaChalkboardTeacher, FaLeaf, FaBolt, FaCheck } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      {/* ====== HERO visual ====== */}
      <section className="section section-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(1200px 600px at 15% -10%, rgba(0,217,255,.08), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(0,255,170,.06), transparent 60%)'
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            width: 520,
            height: 520,
            right: '-120px',
            bottom: '-140px',
            filter: 'blur(70px)',
            opacity: 0.35,
            background: 'conic-gradient(from 180deg, #00d9ff, #00ffaa, #00d9ff)'
          }}
        />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="align-items-center gy-5">
            <Col lg={8}>
              <span className="badge text-bg-dark border border-light-subtle mb-3">
                Raúl Bordón – Bartender & Consultor
              </span>
              <h1 className="display-4 fw-bold">
                Consultoría y formación de coctelería
              </h1>
              <p className="lead text-muted mb-4">
                Carta rentable + operativa ágil + equipo formado. De la idea al servicio, con filosofía
                <strong> 0-Waste</strong> y <strong>“comida líquida”</strong> para sorprender y fidelizar.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <Button as={Link} to="/contacto" size="lg" variant="outline-light">
                  Pedir propuesta
                </Button>
                <Button as={Link} to="/inspiracion-estilo" size="lg" variant="outline-light">
                  Inspiración & Estilo
                </Button>
              </div>
              <div className="d-flex flex-wrap gap-4 text-muted">
                <span className="d-flex align-items-center"><FaWineGlassAlt className="text-accent me-2" /> Cartas rentables</span>
                <span className="d-flex align-items-center"><FaCogs className="text-accent me-2" /> Operativa ágil</span>
                <span className="d-flex align-items-center"><FaChalkboardTeacher className="text-accent me-2" /> Formación efectiva</span>
                <span className="d-flex align-items-center"><FaLeaf className="text-accent me-2" /> 0-Waste</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====== EXPERIENCIA mejorada ====== */}
      <section className="section section-alt experience-showcase">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <span className="xp-chip">Experiencia</span>
              <h2 className="fw-bold mt-3 mb-2">He trabajado donde importa</h2>
              <p className="text-muted mb-0">
                Desde aperturas completas hasta barras de alto rendimiento: mi experiencia se transforma en resultados para tu negocio.
              </p>
            </Col>
          </Row>

          <Row className="g-3 align-items-stretch">
            {[
              { name: 'Manifesto13', tag: 'Alta demanda', desc: 'Creación de cócteles de autor con filosofía 0-Waste y rotación temporal constante de productos frescos.' },
              { name: 'Evranto', tag: 'Apertura total', desc: 'Diseño de la barra, acuerdos con proveedores y carta de cócteles desde cero para una apertura exitosa.' },
              { name: 'StreetXO', tag: 'Ritmo & precisión', desc: 'Servicio a gran volumen con estándares extremos de calidad y creatividad constante.' },
              { name: "Fisher’s", tag: 'Carta rentable', desc: 'Optimización de la carta y formación del equipo para maximizar margen y satisfacción del cliente.' },
              { name: 'Club Matador', tag: 'Excelencia', desc: 'Servicio premium, atención personalizada y propuestas adaptadas a un público exigente.' },
            ].map((b, i) => (
              <Col key={i} xs={6} md={4} lg={2} className="d-flex">
                <div className="xp-tile flex-fill">
                  <div className="xp-logo">{b.name}</div>
                  <div className="xp-tag">{b.tag}</div>
                  <div className="xp-desc">{b.desc}</div>
                </div>
              </Col>
            ))}

            <Col lg={6} className="mt-3">
              <div className="xp-panel h-100">
                <h6 className="text-uppercase text-muted mb-3">Indicadores</h6>
                <div className="xp-kpi">
                  <div className="d-flex justify-content-between small mb-1">
                    <span>Servicio pico (día)</span><span>~300 cócteles</span>
                  </div>
                  <div className="xp-bar"><span style={{ width: '88%' }} /></div>
                </div>
                <div className="xp-kpi">
                  <div className="d-flex justify-content-between small mb-1">
                    <span>Reducción de mermas</span><span>hasta 35%</span>
                  </div>
                  <div className="xp-bar"><span style={{ width: '70%' }} /></div>
                </div>
                <div className="xp-kpi">
                  <div className="d-flex justify-content-between small mb-1">
                    <span>Velocidad de salida</span><span>+20%</span>
                  </div>
                  <div className="xp-bar"><span style={{ width: '65%' }} /></div>
                </div>
              </div>
            </Col>

            <Col lg={6} className="mt-3">
              <div className="xp-panel h-100">
                <blockquote className="mb-0">
                  <p className="mb-2">
                    “Raúl optimizó nuestra barra y formó al equipo. La carta nueva elevó el margen y la experiencia de los clientes.”
                  </p>
                  <footer className="small text-muted">— Dirección, Fisher’s Madrid</footer>
                </blockquote>
              </div>
            </Col>
          </Row>

          <div className="xp-marquee mt-4" aria-hidden="true">
            <div className="xp-marquee-track">
              {['Manifesto13', 'Evranto', 'StreetXO', "Fisher’s", 'Club Matador', 'Eventos privados', 'Formación in-company']
                .concat(['Manifesto13', 'Evranto', 'StreetXO', "Fisher’s", 'Club Matador', 'Eventos privados', 'Formación in-company'])
                .map((txt, i) => (
                  <span key={i} className="xp-pill">{txt}</span>
                ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ====== TRES PILARES ====== */}
      <section className="section section-dark">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 className="fw-bold">Resultados que importan</h2>
              <p className="text-muted">Más margen, menos mermas y un servicio que fluye.</p>
            </Col>
          </Row>
          <Row className="gy-5 text-center">
            <Col md={4}>
              <div className="mb-2"><FaBolt size={28} className="text-accent" /></div>
              <h4 className="mb-2">Cartas que venden</h4>
              <p className="text-muted mb-0">
                8–12 cócteles con escandallos y fichas técnicas. Identidad propia, rotación de stock y margen cuidado.
              </p>
            </Col>
            <Col md={4}>
              <div className="mb-2"><FaCogs size={28} className="text-accent" /></div>
              <h4 className="mb-2">Operativa que fluye</h4>
              <p className="text-muted mb-0">
                Mise en place, batching y estándares. Experiencia de alto volumen (picos ~300 cócteles/día).
              </p>
            </Col>
            <Col md={4}>
              <div className="mb-2"><FaCheck size={28} className="text-accent" /></div>
              <h4 className="mb-2">Calidad que se mantiene</h4>
              <p className="text-muted mb-0">
                Formación in-company (4–8 h) con servicio real y guía de estandarización para sostener resultados.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====== BLOQUE DIFERENCIADOR ====== */}
      <section className="section section-alt">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6}>
              <h3 className="fw-bold mb-3">0-Waste & Comida líquida</h3>
              <p className="text-muted">
                Uso integral del ingrediente: pieles para bitters, pulpas para siropes, huesos para infusiones.
                Adaptación de platos icónicos a formato líquido (gazpacho-cóctel, tiramisú líquido, ceviche bebible).
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button as={Link} to="/servicios" variant="outline-light">Ver servicios</Button>
                <Button as={Link} to="/inspiracion-estilo" variant="outline-light">Ver inspiración</Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ height: 140, borderRadius: 16, background: 'linear-gradient(135deg,#00d9ff22,#00ffaa22)' }} />
                <div style={{ height: 220, borderRadius: 16, background: 'linear-gradient(135deg,#00ffaa22,#00d9ff22)' }} />
                <div style={{ height: 220, borderRadius: 16, background: 'linear-gradient(135deg,#00d9ff22,#00ffaa22)' }} />
                <div style={{ height: 140, borderRadius: 16, background: 'linear-gradient(135deg,#00ffaa22,#00d9ff22)' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ====== CTA FINAL ====== */}
      <section className="section section-dark" style={{ paddingTop: 0 }}>
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }} className="text-center">
              <h5 className="mb-2">Hablemos de tu barra</h5>
              <p className="text-muted mb-3">
                Cuéntame zona, fecha y aforo. Te envío propuesta hoy.
              </p>
              <Button as={Link} to="/contacto" size="lg" variant="outline-light">
                Contactar
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
