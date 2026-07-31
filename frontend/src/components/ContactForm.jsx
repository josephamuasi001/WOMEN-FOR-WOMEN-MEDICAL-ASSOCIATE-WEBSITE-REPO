import { useState } from 'react'
import Button from './ui/Button'
import Container from './ui/Container'
import { submitContact } from '../services/api'
import '../styles/contact-form.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
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
      case 'subject':
        return value.trim().length >= 5 ? '' : 'Subject must be at least 5 characters.'
      case 'message':
        return value.trim().length >= 10 ? '' : 'Message must be at least 10 characters.'
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
      await submitContact({
        full_name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })

      setSubmitted(true)
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setSubmitted(false)
      setServerError('We could not send your message right now. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-form-section">
      <Container>
        <div className="contact-form-card">
          <div className="contact-form-header">
            <p className="contact-form-label">Contact Us</p>
            <h2>Send Us a Message</h2>
            <p>
              Ask about appointments, services, or any questions you have for our team.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
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

              <div className="form-group full-width">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to ask about?"
                />
                {errors.subject && <small className="form-error">{errors.subject}</small>}
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                />
                {errors.message && <small className="form-error">{errors.message}</small>}
              </div>
            </div>

            <div className="form-actions">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>

            {submitted && (
              <p className="success-message">
                Your message has been sent successfully. We will reply soon.
              </p>
            )}

            {serverError && <p className="form-error">{serverError}</p>}
          </form>
        </div>
      </Container>
    </section>
  )
}

export default ContactForm
