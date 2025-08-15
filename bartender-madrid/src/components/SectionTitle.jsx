export default function SectionTitle({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-5">
      {tag && <span className="chip d-inline-block mb-2">{tag}</span>}
      <h2 className="display-6 fw-bold">{title}</h2>
      {subtitle && <p className="text-muted mt-2">{subtitle}</p>}
    </div>
  )
}
