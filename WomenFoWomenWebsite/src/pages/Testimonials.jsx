import { useState } from 'react'

const filters = ['All', 'ZocDoc', 'Google', 'Facebook']

const testimonials = [
  { stars: 5, quote: '"Very warm and comfortable, very compassionate."', meta: 'Karlee W. · ZocDoc, 2017', source: 'ZocDoc' },
  { stars: 4, quote: '"Very personable and listens to what you say."', meta: 'Olivia P. · Google, 2017', source: 'Google' },
  { stars: 5, quote: '"Professional, at ease, knowledgeable, trustworthy."', meta: 'Christine M. · ZocDoc, 2016', source: 'ZocDoc' },
]

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [storyOpen, setStoryOpen] = useState(false)

  const visible = activeFilter === 'All'
    ? testimonials
    : testimonials.filter((t) => t.source === activeFilter)

  return (
    <>
      <section className="hero centered container">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Patient stories</p>
        <h1>What our patients say</h1>
        <p className="lead">Real reviews from ZocDoc, Google, and Facebook.</p>
      </section>

      <section className="container">
        <div className="filter-row">
          {filters.map((f) => (
            <div
              key={f}
              className={`pill ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </div>
          ))}
        </div>
        <div className="testi-row">
          {visible.map((t) => (
            <div className="testi-card" key={t.meta}>
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <blockquote>{t.quote}</blockquote>
              <div className="testi-meta">{t.meta}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-head">
          <p className="eyebrow">Featured story</p>
          <h2>Jasmine's story: fibroid surgery and fertility support</h2>
        </div>
        <div className={`faq-item ${storyOpen ? 'open' : ''}`} onClick={() => setStoryOpen(!storyOpen)}>
          <div className="faq-q">2017 &mdash; Jasmine S. <span className="faq-plus">+</span></div>
          <div className="faq-a"><p>A longer patient account describing her surgical and fertility care journey with the practice, available in full on request.</p></div>
        </div>
      </section>
    </>
  )
}