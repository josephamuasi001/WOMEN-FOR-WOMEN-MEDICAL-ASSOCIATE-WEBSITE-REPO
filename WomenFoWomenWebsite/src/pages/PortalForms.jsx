const forms = [
  'Authorization Letter',
  'Consent for PHI Use',
  'Patient Medical Info',
  'Medical Record Release',
  'Registration Form',
]

export default function PortalForms() {
  return (
    <>
      <section className="hero centered container">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Patient portal</p>
        <h1>Athena Patient Portal</h1>
        <p className="lead">Access your records, message the office, and manage appointments.</p>
        <div className="cta-row"><a href="#" className="btn btn-primary">Log in to the portal</a></div>
      </section>

      <section className="container">
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Downloadable forms</p>
          <h2>Patient forms</h2>
        </div>
        <div className="grid-3">
          {forms.map((f) => (
            <div className="card" style={{ textAlign: 'center' }} key={f}>
              <div className="card-icon" style={{ margin: '0 auto 14px' }}>&#128196;</div>
              <h3 style={{ fontSize: '15.5px' }}>{f}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}