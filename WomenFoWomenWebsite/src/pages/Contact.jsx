import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Thanks — this is a design preview form.')
  }

  return (
    <>
      <section className="hero centered container">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Get in touch</p>
        <h1>Book an appointment with Dr. Amui-Bellon, M.D.</h1>
        <p className="lead">We respond personally to every call and message &mdash; not an automated scheduler.</p>
      </section>

      <section className="container">
        <div className="grid-2">
          <div className="card">
            <h3 style={{ marginBottom: '20px' }}>Send a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label>Email</label>
                <input type="email" name="email" placeholder="you@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label>Message</label>
                <textarea name="message" placeholder="How can we help?" value={form.message} onChange={handleChange}></textarea>
              </div>
              <button className="btn btn-primary" type="submit">Send message</button>
            </form>
          </div>
          <div>
            <div className="info-card"><div className="ic">&#9742;</div><div><strong>Call or fax</strong><span>(856) 267-5019 &middot; Fax (856) 267-5025</span></div></div>
            <div className="info-card"><div className="ic">&#128205;</div><div><strong>Address</strong><span>17000 Suite C Commerce Pkwy, Mount Laurel, NJ 08054</span></div></div>
            <div className="info-card"><div className="ic">&#128337;</div><div><strong>Hours</strong><span>Mon&ndash;Fri 8:30&ndash;4:30 &middot; Sat by appt &middot; Sun closed</span></div></div>
            <div className="map-embed"><img src="https://picsum.photos/seed/map-placeholder/700/400" alt="Map placeholder — embed a real Google Map here" style={{ width: '100%', height: '100%' }} /></div>
          </div>
        </div>
      </section>
    </>
  )
}