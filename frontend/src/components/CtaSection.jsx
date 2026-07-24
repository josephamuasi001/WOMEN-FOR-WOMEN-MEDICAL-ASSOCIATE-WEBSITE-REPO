import Container from './ui/Container'
import Button from './ui/Button'
import '../styles/cta.css'

function CtaSection() {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-card">
          <h2>Ready to Prioritize Your Health?</h2>
          <p>
            Schedule a visit with our caring professionals and take the next step toward confident,
            compassionate care.
          </p>

          <div className="cta-actions">
            <Button>Book Appointment</Button>
            <Button variant="secondary">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CtaSection
