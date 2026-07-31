import { Link } from 'react-router-dom'

import staffPic from '../assets/Doctors.webp'
import officePic from '../assets/Doctor 1.webp'
import frontDeskPic from '../assets/front-desk.jpg'

export default function StaffPractice() {

  return (
    <>
      <section className="container" style={{ paddingTop: '64px' }}>
        <p className="eyebrow">Staff &amp; practice</p>
        <h1 style={{ fontSize: 'clamp(28px,3.6vw,40px)', maxWidth: '640px' }}>A dedicated team, welcoming offices</h1>
      </section>

      <section className="container">
        <div className="split-feature">
          <div className="split-media"><img src={staffPic} alt="Front desk / office support team placeholder" /></div>
          <div>
            <p className="eyebrow">Support you can count on</p>
            <h2>Gynecology, fertility &amp; surgical support</h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: '14px' }}>Gynecology, fertility, fibroid management, gynecologic surgery, and menopause treatment &mdash; supported by an experienced office team from your first call.</p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="split-feature rev">
          <div className="split-media"><img src={officePic} alt="Office exterior placeholder" /></div>
          <div>
            <p className="eyebrow">Our office</p>
            <h2>102i Centre Boulevard, Marlton, NJ 08053</h2>
            <p style={{ color: 'var(--ink-soft)', margin: '14px 0 20px' }}>Phone (856) 267-5019 &middot; Fax (856) 267-5025</p>
            <div className="chip-grid">
              <div className="chip">5 mi to I-295/I-95</div>
              <div className="chip">30 min PHL airport</div>
              <div className="chip">60 min Newark airport</div>
              <div className="chip">90 min NYC</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="split-feature">
          <div className="split-media"><img src={frontDeskPic} alt="Front desk placeholder" /></div>
          <div>
            <p className="eyebrow">Costs &amp; insurance</p>
            <h2>Straightforward, upfront guidance</h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: '14px' }}>Costs are explained clearly at your initial consult. Major medical insurances are accepted, and self-pay patients are always welcome.</p>
          </div>
        </div>
      </section>
    </>
  )
}
