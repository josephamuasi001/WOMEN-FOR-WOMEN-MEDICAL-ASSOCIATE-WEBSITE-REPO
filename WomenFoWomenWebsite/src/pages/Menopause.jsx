import { useState } from 'react'
import { Link } from 'react-router-dom'
import menopausePic from '../assets/Menopause-pic.webp'
import monalisaPic from '../assets/Mona-lisa touch.webp'

const tabs = [
  { label: 'Hot flashes', content: "Sudden waves of heat and sweating, often disrupting daily life — treatable with hormonal and non-hormonal options tailored to you." },
  { label: 'Vaginal dryness', content: "Discomfort caused by declining estrogen — addressed through topical treatment and in-office MonaLisa Touch® therapy." },
  { label: 'Sleep disruption', content: "Night sweats and hormonal shifts affecting rest — we look at the full picture, not just a single symptom." },
  { label: 'Mood changes', content: "Irritability and mood swings tied to hormonal change — supported with a compassionate, whole-person approach." },
]

export default function Menopause() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <section className="hero split container">
        <div className="blob blob-1"></div>
        <div>
          <p className="eyebrow">Menopause care</p>
          <h1>Relief and confidence through every stage of menopause</h1>
          <p className="lead">From symptom management to MonaLisa Touch&reg;, personalized care that helps you feel like yourself again.</p>
          <div className="cta-row"><Link to="/contact" className="btn btn-primary">Book a consultation</Link></div>
        </div>
        <div className="hero-media"><img src={menopausePic} alt="Calm, supportive care setting" /></div>
      </section>

      <section className="container">
        <div className="section-head center">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Conditions we treat</p>
          <h2>Common menopause-related concerns</h2>
        </div>

        <div className="tabs">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              className={`tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="tab-panel active">
          <p style={{ color: 'var(--ink-soft)' }}>{tabs[activeTab].content}</p>
        </div>
      </section>

      <section className="container">
        <div className="split-feature rev">
          <div className="split-media"><img src={monalisaPic} alt="In-office treatment room" /></div>
          <div>
            <p className="eyebrow">Featured treatment</p>
            <h2>MonaLisa Touch&reg;</h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: '14px' }}>A gentle, in-office laser treatment that restores vaginal tissue health &mdash; a quick, well-tolerated option for many patients experiencing menopause-related discomfort.</p>
            <div className="cta-row" style={{ marginTop: '24px' }}><Link to="/contact" className="btn btn-outline">Ask about MonaLisa Touch&reg;</Link></div>
          </div>
        </div>
      </section>
    </>
  )
}