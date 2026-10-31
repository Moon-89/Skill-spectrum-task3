import { useState } from 'react'
import { CenteredTitle } from './SectionHeading.jsx'

// Set VITE_CONTACT_ENDPOINT to a URL that accepts form POSTs to deliver messages.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

const EMPTY = { fname: '', lname: '', email: '', subject: '', message: '', website: '' }

function validate(values) {
  const errors = {}
  for (const name of ['fname', 'lname', 'subject', 'message']) {
    if (!values[name].trim()) errors[name] = true
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = true
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const field = (name) => ({
    id: name,
    name,
    value: values[name],
    required: true,
    className: 'form-control rounded-0',
    'aria-invalid': errors[name] ? 'true' : undefined,
    onChange: (event) => {
      setValues((current) => ({ ...current, [name]: event.target.value }))
      setErrors((current) => ({ ...current, [name]: false }))
    },
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus({ type: 'error', text: 'Please fill in every field with valid details.' })
      return
    }
    if (values.website) return
    if (!ENDPOINT) {
      setStatus({ type: 'error', text: 'This form has no delivery endpoint configured yet, so your message was not sent.' })
      return
    }
    setStatus({ type: 'sending', text: 'Sending...' })
    try {
      const response = await fetch(ENDPOINT, { method: 'POST', body: new FormData(event.target) })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      setValues(EMPTY)
      setStatus({ type: 'success', text: 'Thank you! Your message has been sent.' })
    } catch {
      setStatus({ type: 'error', text: 'Sorry, your message could not be sent. Please try again.' })
    }
  }

  return (
    <div className="site-section bg-image2 overlay" id="contact-section" style={{ backgroundImage: "url('images/hero_1.jpg')" }}>
      <div className="container">
        <CenteredTitle className="text-black">Contact Us</CenteredTitle>
        <div className="row justify-content-center">
          <div className="col-lg-7 mb-5">
            <form onSubmit={handleSubmit} className="p-5 bg-white" noValidate>
              <h2 className="h4 text-black mb-5">Contact Form</h2>

              <div className="row mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" htmlFor="fname">First Name</label>
                  <input type="text" autoComplete="given-name" {...field('fname')} />
                </div>
                <div className="col-md-6">
                  <label className="text-black" htmlFor="lname">Last Name</label>
                  <input type="text" autoComplete="family-name" {...field('lname')} />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="email">Email</label>
                  <input type="email" autoComplete="email" {...field('email')} />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="subject">Subject</label>
                  <input type="text" {...field('subject')} />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="message">Message</label>
                  <textarea cols="30" rows="10" style={{ minHeight: '150px' }} placeholder="Leave your message here..." {...field('message')}></textarea>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-primary me-2 mb-2" disabled={status?.type === 'sending'} />
                </div>
              </div>
              <input
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                hidden
                value={values.website}
                onChange={(event) => setValues((current) => ({ ...current, website: event.target.value }))}
              />
              {status && <div className={`kit-form-status is-${status.type}`} role="status">{status.text}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
