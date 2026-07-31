import { Link } from 'react-router-dom'

export default function StickyCta() {
  return (
    <div className="sticky-cta">
      <a href="tel:8562675019" style={{ color: '#fff' }}>&#9742; Call now</a>
      &nbsp;|&nbsp;
      <Link to="/contact" style={{ color: '#fff' }}>Book appointment</Link>
    </div>
  )
}