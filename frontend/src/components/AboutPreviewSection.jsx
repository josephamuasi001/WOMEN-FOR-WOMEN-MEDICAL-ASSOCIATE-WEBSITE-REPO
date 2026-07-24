import Section from './ui/Section'
import Button from './ui/Button'
import Container from './ui/Container'
import '../styles/about-preview.css'

function AboutPreviewSection() {
  const highlights = ['Experienced Doctors', 'Modern Facilities', 'Patient-Centered Care']

  return (
    <Section title="About WFWMA">
      <Container>
        <div className="about-preview-grid">
          <div className="about-preview-image-wrap">
            <img
              src="/about-preview.svg"
              alt="Healthcare professionals caring for patients"
              className="about-preview-image"
            />
          </div>

          <div className="about-preview-content">
            <p className="about-preview-label">About WFWMA</p>
            <h2>Compassionate Healthcare Designed Around Women</h2>
            <p className="about-preview-copy">
              WFWMA is committed to providing safe, respectful, and professional care that
              supports women through every stage of life with dignity and compassion.
            </p>

            <ul className="about-preview-list">
              {highlights.map((item) => (
                <li key={item}>
                  <span className="about-preview-check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button>Learn More</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default AboutPreviewSection
