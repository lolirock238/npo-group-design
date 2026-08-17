import { useState } from 'react'
import './Contact.css'

const INITIAL = { name: '', organisation: '', email: '', message: '' }

// Contact form. Section 9: "Contact — contact form, email, and links to
// YouTube and social handles." This is frontend-only: submission is not
// wired to a backend yet.
function Contact() {
  const [values, setValues] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-form contact-form--done">
        <h3>Message received</h3>
        <p>Thank you, {values.name.split(' ')[0] || 'there'} — the Secretariat will be in touch.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required value={values.name} onChange={handleChange} />
      </div>
      <div className="contact-form__row">
        <label htmlFor="organisation">Organisation</label>
        <input id="organisation" name="organisation" type="text" value={values.organisation} onChange={handleChange} />
      </div>
      <div className="contact-form__row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required value={values.email} onChange={handleChange} />
      </div>
      <div className="contact-form__row">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required value={values.message} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Send message</button>
    </form>
  )
}

export default Contact
