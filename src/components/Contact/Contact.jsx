import { useState } from 'react'
import { EMAIL } from '../../config.js'
import './Contact.css'

const INITIAL = { name: '', organisation: '', email: '', message: '' }

// Contact form. Messages are delivered to the official inbox (EMAIL in
// src/config.js) through FormSubmit (https://formsubmit.co). The first
// submission triggers a one-time activation email to that inbox; click the
// link in it once and all later messages arrive normally.
const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`
function Contact() {
  const [values, setValues] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          _subject: `Website enquiry from ${values.name}`,
          _replyto: values.email,
          _template: 'table',
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitted(true)
    } catch {
      setError(`Sorry, your message could not be sent. Please email us directly at ${EMAIL}.`)
    } finally {
      setSending(false)
    }
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
      {error && <p role="alert" className="contact-form__error">{error}</p>}
      <button type="submit" className="btn btn-primary" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}

export default Contact
