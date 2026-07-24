import Card from './ui/Card'
import Container from './ui/Container'
import '../styles/stats.css'

function StatsSection() {
  const stats = [
    { value: '50+', label: 'Healthcare Professionals', icon: '✚' },
    { value: '10+', label: 'Years of Excellence', icon: '★' },
    { value: '15k+', label: 'Happy Patients', icon: '♥' },
    { value: '24/7', label: 'Patient Support', icon: '☑' },
  ]

  return (
    <section className="stats-section">
      <Container>
        <div className="stats-grid">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <div className="stat-card">
                <div className="stat-icon" aria-hidden="true">
                  {stat.icon}
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default StatsSection
