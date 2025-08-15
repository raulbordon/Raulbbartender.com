export default function PageHeader({ eyebrow, title, subtitle, right }) {
  return (
    <div className="py-4 bg-white border-bottom">
      <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-md-between gap-3">
        <div>
          {eyebrow && <div className="text-uppercase text-primary small fw-semibold">{eyebrow}</div>}
          <h1 className="h3 fw-bold mb-1">{title}</h1>
          {subtitle && <p className="text-muted mb-0">{subtitle}</p>}
        </div>
        {right && <div className="d-flex gap-2">{right}</div>}
      </div>
    </div>
  )
}
