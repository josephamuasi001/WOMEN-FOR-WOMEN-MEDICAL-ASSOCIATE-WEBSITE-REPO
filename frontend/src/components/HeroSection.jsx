import Container from './ui/Container'
import Button from './ui/Button'
import '../styles/hero.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="hero-eyebrow">Women for Women Medical Associates</p>
            <h1>Your Health, Our Priority</h1>
            <p className="hero-copy">
              Experience compassionate and professional healthcare in a welcoming environment,
              designed to support your well-being with care you can trust.
            </p>

            <div className="hero-actions">
              <Button>Book Appointment</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>

          <div className="hero-media">
            <img
              src="/hero-illustration.svg"
              alt="Illustration of compassionate healthcare support"
              className="hero-image"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
