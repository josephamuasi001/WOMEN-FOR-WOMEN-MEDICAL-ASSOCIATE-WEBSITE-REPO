import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/fertility', label: 'Fertility' },
  { to: '/menopause', label: 'Menopause Care' },
  { to: '/physician', label: 'Physician & CEO' },
  { to: '/staff-practice', label: 'Staff & Practice' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="nav-wrap">
      <div className="nav">
        <Link to="/" className="logo">
          <div className="logo-mark">W</div>
          <div className="logo-text">Women <span>for</span> Women Medical</div>
        </Link>

        <div
          className="nav-links"
          style={
            open
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  top: '64px',
                  left: 0,
                  right: 0,
                  background: '#fff',
                  padding: '20px 6%',
                  borderBottom: '1px solid var(--line)',
                }
              : undefined
          }
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={location.pathname === l.to ? 'current' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <a href="tel:8562675019" className="nav-phone">&#9742; (856) 267-5019</a>
          <Link to="/portal-forms" className="btn btn-outline btn-sm">Patient Portal</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">Book Appointment</Link>
          <div className="hamburger" onClick={() => setOpen(!open)}>&#9776;</div>
        </div>
      </div>
    </div>
  )
}