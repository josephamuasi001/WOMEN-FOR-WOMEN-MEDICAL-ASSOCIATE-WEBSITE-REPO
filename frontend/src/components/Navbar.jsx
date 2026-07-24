import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import Button from './ui/Button'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ]

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__brand">
          <span className="navbar__brand-mark">W</span>
          <span>WFWMA</span>
        </NavLink>

        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
          <span className="navbar__toggle-line"></span>
        </button>

        <div className={`navbar__menu ${isOpen ? 'is-open' : ''}`}>
          <div className="navbar__links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'active' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="navbar__cta">
            <Button>Book Appointment</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
