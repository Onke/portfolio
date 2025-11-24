import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactPanel = ({ contact }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('sending');

    window.setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <div className="contact-panel">
      <div className="contact-panel__info">
        <p className="eyebrow">Let&apos;s build together</p>
        <h3>Tell me about your next milestone.</h3>
        <p>{contact.availability}</p>
        <ul>
          <li>
            <span>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <span>Phone</span>
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
          </li>
          <li>
            <span>Location</span>
            <p>{contact.location}</p>
          </li>
          <li>
            <span>Coffee Chat</span>
            <a href={contact.calendar} target="_blank" rel="noreferrer">
              {contact.calendar}
            </a>
          </li>
        </ul>
      </div>
      <form className="contact-panel__form" onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          value={formState.message}
          onChange={handleChange}
          required
        />
        <div className="contact-panel__actions">
          <button type="submit" className="pill pill--solid" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          <span aria-live="polite">
            {status === 'success' ? 'Message received! I will reply soon.' : ''}
          </span>
        </div>
      </form>
    </div>
  );
};

ContactPanel.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string,
    availability: PropTypes.string,
    calendar: PropTypes.string,
  }).isRequired,
};

export default ContactPanel;
