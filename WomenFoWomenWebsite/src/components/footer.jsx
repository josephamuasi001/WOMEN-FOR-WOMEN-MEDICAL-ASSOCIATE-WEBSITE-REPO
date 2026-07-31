import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: '16px' }}>
              <div className="logo-mark">W</div>
              <div className="logo-text" style={{ color: '#fff' }}>Women for Women Medical</div>
            </div>
            <p className="footer-line">17000 Suite C Commerce Parkway,<br />Mount Laurel, NJ 08054</p>
            <p className="footer-line">(856) 267-5019 &middot; Fax (856) 267-5025</p>
          </div>
          <div>
            <div className="footer-col-title">Care</div>
            <p className="footer-line"><Link to="/fertility">Fertility (IUI/IVF)</Link></p>
            <p className="footer-line"><Link to="/menopause">Menopause Care</Link></p>
            <p className="footer-line"><Link to="/physician">Physician &amp; CEO</Link></p>
          </div>
          <div>
            <div className="footer-col-title">Resources</div>
            <p className="footer-line"><Link to="/portal-forms">Patient Portal &amp; Forms</Link></p>
            <p className="footer-line"><Link to="/testimonials">Testimonials</Link></p>
            <p className="footer-line"><Link to="/staff-practice">Staff &amp; Practice</Link></p>
          </div>
          <div>
            <div className="footer-col-title">Connect</div>
            <p className="footer-line"><Link to="/contact">Contact us</Link></p>
            <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: '8px' }}>Book Appointment</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; Women for Women Medical Associates. All rights reserved.</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  )
}