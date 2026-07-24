import { useState } from 'react'
import Button from './ui/Button'
import Container from './ui/Container'
import { submitEnquiry } from '../services/api'
import '../styles/appointment-form.css'

function AppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState('')

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        return value.trim() ? '' : 'Full name is required.'
      case 'email': {
        if (!value.trim()) return 'Email is required.'
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailPattern.test(value) ? '' : 'Please enter a valid email address.'
      }
      case 'phone':
        return value.trim() ? '' : 'Phone number is required.'
      case 'date':
        return value ? '' : 'Preferred date is required.'
      case 'service':
        return value ? '' : 'Please select a healthcare service.'
      case 'message':
        return value.trim() ? '' : 'Please add a short message.'
      default:
        return ''
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const nextErrors = {}
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value)
      if (error) nextErrors[key] = error
    })

    setErrors(nextErrors)
    setServerError('')

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setIsSubmitting(true)

    try {
      await submitEnquiry({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferred_date: formData.date,
        service: formData.service,
        message: formData.message,
      })

      setSubmitted(true)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        date: '',
        service: '',
        message: '',
      })
    } catch (error) {
      setSubmitted(false)
      setServerError('We could not submit your enquiry right now. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="appointment-form-section">
      <Container>
        <div className="appointment-form-card">
          <div className="appointment-form-header">
            <p className="appointment-form-label">Appointment Enquiry</p>
            <h2>Book Your Visit</h2>
            <p>
              Share your details and we will help you arrange the right appointment with our team.
            </p>
          </div>

          <form className="appointment-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <small className="form-error">{errors.fullName}</small>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <small className="form-error">{errors.email}</small>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <small className="form-error">{errors.phone}</small>}
              </div>

              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && <small className="form-error">{errors.date}</small>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="service">Healthcare Service</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="General Consultation">General Consultation</option>
                  <option value="Antenatal Care">Antenatal Care</option>
                  <option value="Family Planning">Family Planning</option>
                  <option value="Laboratory Services">Laboratory Services</option>
                  <option value="Ultrasound">Ultrasound</option>
                  <option value="Women's Wellness">Women's Wellness</option>
                </select>
                {errors.service && <small className="form-error">{errors.service}</small>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your enquiry"
                />
                {errors.message && <small className="form-error">{errors.message}</small>}
              </div>
            </div>

            <div className="form-actions">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
              </Button>
            </div>

            {submitted && (
              <p className="success-message">
                Your appointment enquiry has been submitted successfully.
              </p>
            )}

            {serverError && <p className="form-error">{serverError}</p>}
          </form>
        </div>
      </Container>
    </section>
  )
}

export default AppointmentForm
