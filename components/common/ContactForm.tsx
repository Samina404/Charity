'use client';

import { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = { name: '', email: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required';
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon">✉️</div>
        <h3>Message Sent!</h3>
        <p>Thank you, {form.name}! We'll respond within 24 hours.</p>
        <button className="btn btn--outline" onClick={() => { setForm(initialState); setSubmitted(false); }}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name">Full Name *</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" />
          {errors.name && <span className="contact-form__error">{errors.name}</span>}
        </div>
        <div className="contact-form__field">
          <label htmlFor="email">Email Address *</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
          {errors.email && <span className="contact-form__error">{errors.email}</span>}
        </div>
      </div>
      <div className="contact-form__field">
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="How can we help?" />
      </div>
      <div className="contact-form__field">
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} placeholder="Tell us more..." />
        {errors.message && <span className="contact-form__error">{errors.message}</span>}
      </div>
      <button type="submit" className="btn btn--primary contact-form__submit">
        Send Message
      </button>
    </form>
  );
}
