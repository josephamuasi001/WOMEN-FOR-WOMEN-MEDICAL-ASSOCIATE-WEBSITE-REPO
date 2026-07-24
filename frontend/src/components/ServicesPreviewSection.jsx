import Card from './ui/Card'
import Container from './ui/Container'
import '../styles/services-preview.css'

function ServicesPreviewSection() {
  const services = [
    { name: 'General Consultation', description: 'Comprehensive checkups and medical advice for everyday health needs.', icon: '✚' },
    { name: 'Antenatal Care', description: 'Supportive prenatal care for mothers before and during pregnancy.', icon: '♥' },
    { name: 'Family Planning', description: 'Personalized guidance and reproductive health support.', icon: '◌' },
    { name: 'Laboratory Services', description: 'Accurate diagnostics and routine medical testing.', icon: '🧪' },
    { name: 'Ultrasound', description: 'Safe imaging for pregnancy and diagnostic assessments.', icon: '◉' },
    { name: 'Women\'s Wellness', description: 'Holistic care focused on long-term health and wellness.', icon: '✿' },
  ]

  return (
    <section className="services-preview-section">
      <Container>
        <div className="services-preview-heading">
          <h2>Our Healthcare Services</h2>
          <p>
            We offer a wide range of compassionate services designed to support women at every stage of life.
          </p>
        </div>

        <div className="services-preview-grid">
          {services.map((service) => (
            <Card key={service.name}>
              <div className="service-card">
                <div className="service-icon" aria-hidden="true">
                  {service.icon}
                </div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <button className="service-arrow" aria-label={`View ${service.name}`}>
                  →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesPreviewSection
