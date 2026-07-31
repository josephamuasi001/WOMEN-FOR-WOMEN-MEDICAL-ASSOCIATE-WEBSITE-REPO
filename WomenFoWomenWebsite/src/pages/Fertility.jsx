import { Link } from 'react-router-dom'

import fertilityPic from '../assets/fertility-pic.jpg'
export default function Fertility() {
  return (
    <>
      <section className="hero-dark">
        <div className="container" style={{ maxWidth: '720px' }}>
          <p className="eyebrow">Fertility care</p>
          <h1>IUI &amp; IVF treatment, guided one step at a time</h1>
          <p className="lead" style={{ maxWidth: '560px' }}>Impressive pregnancy rates, built on individualized protocols and a physician who stays with you at every stage.</p>
          <div className="cta-row"><Link to="/contact" className="btn btn-ghost-light">Book a consultation</Link></div>
        </div>
      </section>

      <section className="container">
        <div className="split-feature">
          <div className="split-media"><img src={fertilityPic} alt="Fertility lab and consultation setting" /></div>
          <div>
            <p className="eyebrow">Why patients choose WFWMA</p>
            <h2>Individualized fertility protocols, not one-size-fits-all</h2>
            <div className="cred-list">
              <div className="cred-item"><span className="dot">&#10003;</span>Reproductive endocrinology expertise, in-house</div>
              <div className="cred-item"><span className="dot">&#10003;</span>IUI and IVF cycles tailored to your history</div>
              <div className="cred-item"><span className="dot">&#10003;</span>Same physician throughout your entire journey</div>
              <div className="cred-item"><span className="dot">&#10003;</span>Transparent guidance on costs and insurance</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section-head">
          <p className="eyebrow">The process</p>
          <h2>Your IVF journey, step by step</h2>
        </div>
        <div className="step-flow">
          <div className="step-row">
            <div className="step-marker"><div className="step-num">1</div><div className="step-line"></div></div>
            <div className="step-content"><h4>Initial consultation</h4><p>A full review of your history and a personalized treatment plan.</p></div>
          </div>
          <div className="step-row">
            <div className="step-marker"><div className="step-num">2</div><div className="step-line"></div></div>
            <div className="step-content"><h4>Ovarian stimulation</h4><p>Monitored medication cycle to encourage healthy egg development.</p></div>
          </div>
          <div className="step-row">
            <div className="step-marker"><div className="step-num">3</div><div className="step-line"></div></div>
            <div className="step-content"><h4>Egg retrieval &amp; fertilization</h4><p>A minor procedure followed by fertilization in the lab.</p></div>
          </div>
          <div className="step-row">
            <div className="step-marker"><div className="step-num">4</div></div>
            <div className="step-content"><h4>Embryo transfer</h4><p>Careful transfer and support through your two-week wait.</p></div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="journey">
          <div className="journey-step"><div className="num">A</div><h4>Just starting out</h4><p style={{ fontSize: '13.5px', color: 'var(--ink-soft)' }}>Begin with a fertility consultation</p></div>
          <div className="journey-step"><div className="num">B</div><h4>Already diagnosed</h4><p style={{ fontSize: '13.5px', color: 'var(--ink-soft)' }}>Bring your records for a second opinion</p></div>
          <div className="journey-step"><div className="num">C</div><h4>Ready for IVF</h4><p style={{ fontSize: '13.5px', color: 'var(--ink-soft)' }}>Discuss protocols and next cycle timing</p></div>
        </div>
      </section>
    </>
  )
}