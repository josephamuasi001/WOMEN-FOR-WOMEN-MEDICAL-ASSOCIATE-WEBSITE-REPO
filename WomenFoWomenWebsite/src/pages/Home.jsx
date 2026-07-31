import { Link } from 'react-router-dom'

import homePic from '../assets/home-pic.jpg'


export default function Home() {
  return (
    <>
      <section className="hero split container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div>
          <p className="eyebrow">From conception to menopause</p>
          <h1>Compassionate women's health, from your first visit onward.</h1>
          <p className="lead">Specializing in fertility treatment (IUI/IVF) and menopause care in Mount Laurel, NJ &mdash; led personally by Dr. J. Amui-Bellon, M.D., since 2008.</p>
          <div className="cta-row">
            <Link to="/contact" className="btn btn-primary">Book an appointment</Link>
            <Link to="/physician" className="btn btn-outline">Meet the physician</Link>
          </div>
        </div>
        <div className="hero-media">
          <img src={homePic} alt="Flowers representing femininity" />
        </div>
      </section>

      <div className="trust-strip">
        <div className="container">
          <div className="trust-item"><div className="trust-icon">&#127942;</div><div><strong>Est. 2008</strong><span>Board certified physician</span></div></div>
          <div className="trust-item"><div className="trust-icon">&#128150;</div><div><strong>Impressive pregnancy rates</strong><span>Across all age groups</span></div></div>
          <div className="trust-item"><div className="trust-icon">&#128205;</div><div><strong>Mount Laurel, NJ</strong><span>Easy access from I-295/I-95</span></div></div>
        </div>
      </div>

      <section className="container">
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>How we help</p>
          <h2>Care built around every stage of your journey</h2>
          <p>Three focused areas of practice, each led by the same physician you'll see from your first visit onward.</p>
        </div>
        <div className="grid-3">
          <div className="card">
            <div className="card-icon">&#129658;</div>
            <h3>Meet the physician</h3>
            <p>Dr. J. Amui-Bellon, M.D. &amp; CEO &mdash; reproductive endocrinology, OB/GYN, and menopause specialist.</p>
            <Link to="/physician" className="card-link">Learn more &rarr;</Link>
          </div>
          <div className="card">
            <div className="card-icon">&#10052;&#65039;</div>
            <h3>Fertility: IUI &amp; IVF</h3>
            <p>Evidence-based fertility treatment with impressive pregnancy rates and a clear, guided journey.</p>
            <Link to="/fertility" className="card-link">Learn more &rarr;</Link>
          </div>
          <div className="card">
            <div className="card-icon">&#127800;</div>
            <h3>Menopause care &amp; relief</h3>
            <p>Symptom relief and MonaLisa Touch&reg; treatment, delivered with comfort and confidence.</p>
            <Link to="/menopause" className="card-link">Learn more &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="cta-banner">
          <h2>Ready to take the next step?</h2>
          <p>Reach out today &mdash; our team responds personally to every request, no automated scheduling.</p>
          <div className="cta-row"><Link to="/contact" className="btn btn-ghost-light">Book an appointment</Link></div>
        </div>
      </section>
    </>
  )
}