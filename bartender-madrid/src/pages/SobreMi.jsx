import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaAward, FaGraduationCap, FaTrophy } from 'react-icons/fa'

export default function SobreMi() {
  const formacion = [
    'Curso Superior de Coctelería · Barmastery (Cámara de Comercio de Madrid) — Alumno Excelente en todas las promociones cursadas.',
    'Curso Superior Spirits Sommelier (Cámara de Comercio de Madrid) — Alumno Excelente.',
    'Grado Medio en Servicios de Restauración (Escuela Simone Ortega).',
    'Curso Rotavapor (Libé Unique Cocktails) y D.O. Cava.',
  ]

  const premios = [
    { año: '2025', titulo: 'Concurso Licor Mandarin Napoléon', detalle: 'Participante seleccionado por creatividad y técnica.' },
    { año: '2023', titulo: 'Concurso de Coctelería Comunidad de Madrid (FABE / ABCM)', detalle: '4º puesto entre los mejores bartenders de la región.' },
    { año: '2022', titulo: 'Segundo puesto de Madrid (ABCM–FABE)', detalle: 'Reconocimiento por carta de autor con filosofía 0-Waste.' },
    { año: '2021', titulo: 'Top-50 nacional en concurso interescuelas (OTC Group)', detalle: 'Clasificación destacada a nivel nacional.' },
  ]

  const manifiesto = [
    'Menos es más: máximo 5–6 sabores por cóctel.',
    '0-Waste real: pieles, pulpas, huesos → siropes, cordiales, fermentados y garnishes.',
    'Intensidad y honestidad: que sepa a lo que dice ser.',
    'Operativa limpia y fluida: ritmo sin perder calidad.',
  ]

  return (
    <section className="section-dark" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Fondo decorativo */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(1000px 600px at 10% -10%, rgba(0,217,255,.08), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(0,255,170,.06), transparent 60%)'
        }}
      />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        {/* Descripción */}
        <Row className="gy-4 mb-5">
          <Col lg={{ span: 10, offset: 1 }}>
            <h2 className="fw-bold mb-3">Sobre mí</h2>
            <p className="lead">
              Soy Raúl Bordón, una persona <strong>muy activa</strong> y profundamente apasionada por la hostelería.
              Mi objetivo es crear experiencias con <strong>cócteles honestos</strong>, intensos y con identidad.
            </p>
            <p>
              Trabajo con una visión clara: <strong>0-Waste</strong> y <strong>aprovechamiento total</strong> del ingrediente.
              Creo que <em>“menos es más”</em>: usando menos elementos y sabores definidos se logran creaciones más
              elaboradas y limpias — sin “mejunges” que confundan el paladar.
            </p>
          </Col>
        </Row>

        {/* Mi estilo */}
        <Row className="mb-5 align-items-center g-4">
          <Col lg={6}>
            <div className="style-panel">
              <span className="style-chip">Mi estilo</span>
              <h3 className="fw-bold mt-2 mb-3">0-Waste & “Menos es más”</h3>
              <p className="text-muted mb-3">
                Diseño cartas con identidad clara y sabores nítidos. Menos ingredientes, más intención y técnica.
                El resultado: cócteles que cuentan algo y una operativa que fluye.
              </p>
              <ul className="style-list">
                <li>Máximo 5–6 sabores por cóctel: **sabe** a lo que promete.</li>
                <li>Rotación y aprovechamiento total: pieles → bitters/oleos; pulpas → siropes; huesos → infusiones.</li>
                <li>Estandarización y mise en place para velocidad sin perder calidad.</li>
              </ul>
              <div className="saving-badge">
                <div className="saving-value">hasta 35%</div>
                <div className="saving-text">de ahorro</div>
                <small className="text-muted">gracias a 0-Waste y optimización</small>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="manifesto-wrap">
              {manifiesto.map((m, i) => (
                <span key={i} className="manifesto-pill">{m}</span>
              ))}
            </div>
          </Col>
        </Row>

        {/* Formación */}
        <Row className="mb-5">
          <Col>
            <h4 className="mb-3"><FaGraduationCap className="text-accent me-2" />Formación</h4>
            <Row className="g-3">
              {formacion.map((f, i) => (
                <Col md={6} key={i}>
                  <div className="p-3 rounded bg-dark bg-opacity-50 h-100 border border-accent">
                    <FaAward className="text-accent me-2" /> {f}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Premios */}
        <Row className="mb-5">
          <Col>
            <h4 className="mb-3"><FaTrophy className="text-accent me-2" />Premios</h4>
            <Row className="g-4">
              {premios.map((p, i) => (
                <Col md={6} key={i}>
                  <div className="p-3 rounded border border-accent bg-dark bg-opacity-50 h-100">
                    <div className="fw-bold text-accent">{p.año} — {p.titulo}</div>
                    <div className="text-muted small mt-1">{p.detalle}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Contacto */}
      <div className="contact-strip">
        <Container>
          <div className="contact-inline">
            <span className="contact-label">Contacto directo</span>
            <a className="contact-link" href="mailto:raulbbartendedr@hotmail.com">✉️ raulbbartendedr@hotmail.com</a>
            <a className="insta-btn" href="https://instagram.com/raulbbartender" target="_blank" rel="noreferrer" aria-label="Instagram @raulbbartender">
              <svg className="insta-icon" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.6-30.6c-21.2-8.45-71.6-6.52-94.11-6.52s-72.91-1.93-94.11,6.52a54,54,0,0,0-30.6,30.6c-8.45,21.2-6.52,71.6-6.52,94.11s-1.93,72.91,6.52,94.11a54,54,0,0,0,30.6,30.6c21.2,8.45,71.6,6.52,94.11,6.52s72.91,1.93,94.11-6.52a54,54,0,0,0,30.6-30.6c8.45-21.2,6.52-71.6,6.52-94.11S357.16,182.86,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82,82,0,0,1,224,338Zm85.38-148.6a19.2,19.2,0,1,1,19.2-19.2A19.2,19.2,0,0,1,309.38,189.4ZM398.8,80A94.54,94.54,0,0,0,368,49.2C338.67,20,298.67,8,224,8S109.33,20,80,49.2C50.8,78.53,38.67,118.53,38.67,193.2S26.67,368,56,397.33C85.33,426.67,125.33,438.8,200,438.8s141.33-12.13,170.67-41.47C400,368,412,328,412,253.33S398.8,80,398.8,80Z"/></svg>
              <span>@raulbbartender</span>
            </a>
          </div>
        </Container>
      </div>
    </section>
  )
}
