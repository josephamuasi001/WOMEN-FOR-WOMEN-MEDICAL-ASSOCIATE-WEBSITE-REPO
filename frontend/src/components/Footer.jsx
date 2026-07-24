import Container from './ui/Container'
import '../styles/footer.css'

function Footer() {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ]

  const socialLinks = ['f', 'in', 'x']

  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">W</div>
            <h3>Women for Women Medical Associates</h3>
            <p>
              Compassionate, professional, and women-focused healthcare designed to support your
              well-being every step of the way.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.to}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Information</h4>
            <ul>
              <li>Email: info@wfwma.org</li>
              <li>Phone: +233 24 000 0000</li>
              <li>Address: 123 Medical Avenue, Accra</li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              {socialLinks.map((icon) => (
                <span key={icon} className="social-icon">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 WFWMA. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
