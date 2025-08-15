import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCocktail, FaLeaf, FaLightbulb } from "react-icons/fa";

export default function InspiracionEstilo() {
  return (
    <section className="section-dark" style={{ padding: "60px 0" }}>
      <Container>
        {/* Encabezado */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">Inspiración y Estilo</h2>
            <p className="text-muted fs-5">
              Mi filosofía se basa en <strong>0-Waste</strong> y{" "}
              <strong>Comida Líquida</strong>: aprovechar cada ingrediente al
              máximo y convertirlo en experiencias líquidas memorables.
            </p>
          </Col>
        </Row>

        {/* Bloque principal con imagen y texto */}
        <Row className="align-items-center mb-5 gy-4">
          <Col md={6}>
            <img
              src="data:image/jpeg;base64,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" // tu imagen original
              alt="Cóctel sostenible"
              className="img-fluid rounded shadow-lg"
              style={{ objectFit: "cover", maxHeight: "400px" }}
            />
          </Col>
          <Col md={6}>
            <h4 className="mb-3 text-light">Cero desperdicio con sabor</h4>
            <p className="text-muted">
              Desde cáscaras hasta pulpas y huesos, cada parte de un ingrediente
              tiene un papel en mi barra: siropes, fermentados, cordiales y
              garnishes únicos que reducen residuos y potencian sabores.
            </p>
            <h4 className="mt-4 mb-3 text-light">Comida líquida</h4>
            <p className="text-muted">
              Llevo la gastronomía al vaso: tiramisú bebible, ceviche líquido o
              reinterpretaciones de postres y platos clásicos en formato
              coctelería.
            </p>
          </Col>
        </Row>

        {/* Segunda fila con iconos */}
        <Row className="gy-4">
          {[
            {
              icon: <FaCocktail size={48} className="text-accent" />,
              titulo: "Sabores intensos",
              desc: "Menos es más: sabores más concentrados con menos elementos en el vaso.",
            },
            {
              icon: <FaLeaf size={48} className="text-success" />,
              titulo: "Creatividad sostenible",
              desc: "Recetas que respetan el planeta y mejoran la rentabilidad.",
            },
            {
              icon: <FaLightbulb size={48} className="text-warning" />,
              titulo: "Innovación constante",
              desc: "Técnicas modernas para sorprender a cada cliente.",
            },
          ].map((item, i) => (
            <Col md={4} key={i}>
              <div
                className="rounded overflow-hidden shadow-lg h-100 text-center p-4"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="mb-3">{item.icon}</div>
                <h5 className="text-light">{item.titulo}</h5>
                <p className="text-muted mb-0">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* CTA final */}
        <Row className="text-center mt-5">
          <Col>
            <h4 className="fw-bold mb-3">
              ¿Quieres llevar tu barra a otro nivel?
            </h4>
            <p className="text-muted mb-4">
              Diseñemos juntos una carta innovadora, rentable y sostenible.
            </p>
            <Button href="/contacto" size="lg" variant="outline-light">
              Contactar
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Hover suave */}
      <style>{`
        .rounded:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}
