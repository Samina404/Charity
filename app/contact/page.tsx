"use client";

import { useState } from 'react';
import Container from '@/components/layout/Container';
import { CONTACT_INFO } from '@/lib/constants';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="work-hero contact-hero section" aria-label="Contact hero" style={{ paddingBlock: '4.5rem 3rem', overflow: 'hidden' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="program-row">
            {/* Left Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="work-hero__label">Get In Touch</div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
                We&apos;re Here
                <br />
                To Help &amp; Listen
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                Have questions about sponsorship, volunteering, or donation statements? Reach out through our contact desk or drop a direct message.
              </p>

              {/* Direct Info List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)', flexShrink: 0 }}>
                    <Phone size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>Phone Support</h4>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text)', transition: 'color 0.2s' }} className="hover:text-[var(--gold-600)]">{CONTACT_INFO.phone}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)', flexShrink: 0 }}>
                    <Mail size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>Email Inquiries</h4>
                    <a href={`mailto:${CONTACT_INFO.email}`} style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text)', transition: 'color 0.2s' }} className="hover:text-[var(--gold-600)]">{CONTACT_INFO.email}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)', flexShrink: 0 }}>
                    <MapPin size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>Office Location</h4>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text)', transition: 'color 0.2s' }} className="hover:text-[var(--gold-600)]">{CONTACT_INFO.address}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', background: 'var(--gold-100)', color: 'var(--gold-600)', flexShrink: 0 }}>
                    <Clock size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>Office Hours</h4>
                    <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text)' }}>{CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--neutral-200)',
                background: 'var(--bg)',
                boxShadow: 'var(--shadow-lg)',
                padding: '2.5rem 2.25rem',
                position: 'relative',
              }}
            >
              {isSubmitted ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '340px', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', background: 'var(--gold-100)', color: 'var(--gold-500)' }}>
                    <CheckCircle2 size={32} strokeWidth={2} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Thank You!</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '280px' }}>
                    Your message has been sent successfully. We will get back to you within 24 business hours.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }} 
                    className="btn btn--outline"
                    style={{ marginTop: '0.5rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.25rem' }}>Send A Message</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-300)', background: 'var(--bg)', color: 'var(--text)', outline: 'none', fontSize: '0.95rem' }} 
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-300)', background: 'var(--bg)', color: 'var(--text)', outline: 'none', fontSize: '0.95rem' }} 
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>Subject</label>
                    <input 
                      type="text" 
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-300)', background: 'var(--bg)', color: 'var(--text)', outline: 'none', fontSize: '0.95rem' }} 
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>Message *</label>
                    <textarea 
                      required 
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-300)', background: 'var(--bg)', color: 'var(--text)', outline: 'none', fontSize: '0.95rem', resize: 'none', fontFamily: 'inherit' }} 
                    />
                  </div>

                  <button type="submit" className="btn btn--primary btn--lg" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '0.5rem' }}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
