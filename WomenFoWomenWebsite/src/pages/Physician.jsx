import { useState } from 'react'
import { Link } from 'react-router-dom'
import physicianPic from '../assets/Physician-pic.webp'

export default function Physician() {
  const [bioOpen, setBioOpen] = useState(true)

  return (
    <>
      <section className="container" style={{ paddingTop: '64px' }}>
        <div className="split-feature">
          <div className="split-media"><img src={physicianPic} alt="Portrait placeholder for Dr. Amui-Bellon" /></div>
          <div>
            <p className="eyebrow">Physician &amp; CEO</p>
            <h1 style={{ fontSize: 'clamp(28px,3.6vw,40px)' }}>Dr. J. Amui-Bellon, M.D.</h1>
            <p style={{ color: 'var(--ink-soft)', marginTop: '16px' }}>Founder of WFWMA, 2008 &middot; UMDNJ Robert Wood Johnson Medical School, 1997. Board certified in OB/GYN with specialized focus on reproductive endocrinology, IVF/fertility, and menopause medicine.</p>
            <div className="cta-row" style={{ marginTop: '24px' }}><Link to="/contact" className="btn btn-primary">Book an appointment</Link></div>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="container">
          <div className="trust-item"><div className="trust-icon">&#127973;</div><div><strong>Cooper &amp; Virtua</strong><span>Hospital privileges</span></div></div>
          <div className="trust-item"><div className="trust-icon">&#11088;</div><div><strong>5.0 rated</strong><span>Healthgrades &amp; ZocDoc</span></div></div>
          <div className="trust-item"><div className="trust-icon">&#127891;</div><div><strong>Board certified</strong><span>FACOG</span></div></div>
        </div>
      </div>

      <section className="container">
        <div className="section-head">
          <p className="eyebrow">Full biography</p>
          <h2>Compassionate, individualized care for thousands of patients</h2>
        </div>
        <div className={`faq-item ${bioOpen ? 'open' : ''}`} onClick={() => setBioOpen(!bioOpen)}>
          <div className="faq-q">Read the full biography <span className="faq-plus">+</span></div>
          <div className="faq-a"><p>Dr. Amui-Bellon has dedicated her career to treating women through every reproductive stage &mdash; from fertility challenges to menopause &mdash; with a hands-on, personal approach that has earned the trust of thousands of patients across South Jersey.</p></div>
        </div>
      </section>

      <section className="container">
        <div className="section-head">
          <p className="eyebrow">Affiliations</p>
          <h2>Medical society memberships</h2>
        </div>
        <div className="chip-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          <div className="chip">ABEP</div><div className="chip">ACHA</div><div className="chip">AMA</div>
          <div className="chip">ASRM</div><div className="chip">FACOG</div><div className="chip">ISSWSH</div>
          <div className="chip">NJOBS</div><div className="chip">PCRS</div><div className="chip">SJMA</div>
        </div>
      </section>

      <section className="container">
        <div className="cta-banner">
          <h2>Recognized by NJ Magazine, South Jersey Magazine &amp; Wellness Magazine</h2>
          <p>Named a Top Doc from 2014&ndash;2017.</p>
        </div>
      </section>
    </>
  )
}