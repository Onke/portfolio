import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container notfound">
      <div>
        <div className="code">404</div>
        <h1>Page not found</h1>
        <p style={{ color: 'var(--text-muted)' }}>
          That page doesn&apos;t exist — it may have moved.
        </p>
        <Link className="btn btn--primary" to="/">
          Back home
        </Link>
      </div>
    </section>
  )
}
