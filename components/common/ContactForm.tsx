'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  dict: {
    form_title: string;
    form_name: string;
    form_email: string;
    form_subject: string;
    form_message: string;
    form_submit: string;
    success_title: string;
    success_desc: string;
    success_btn: string;
  };
}

export default function ContactForm({ dict }: ContactFormProps) {
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
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{dict.success_title}</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '280px' }}>
            {dict.success_desc}
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormState({ name: '', email: '', subject: '', message: '' });
            }} 
            className="btn btn--outline"
            style={{ marginTop: '0.5rem' }}
          >
            {dict.success_btn}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.25rem' }}>{dict.form_title}</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>{dict.form_name}</label>
            <input 
              type="text" 
              required 
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-300)', background: 'var(--bg)', color: 'var(--text)', outline: 'none', fontSize: '0.95rem' }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>{dict.form_email}</label>
            <input 
              type="email" 
              required 
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-300)', background: 'var(--bg)', color: 'var(--text)', outline: 'none', fontSize: '0.95rem' }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>{dict.form_subject}</label>
            <input 
              type="text" 
              value={formState.subject}
              onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
              style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-300)', background: 'var(--bg)', color: 'var(--text)', outline: 'none', fontSize: '0.95rem' }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-muted)' }}>{dict.form_message}</label>
            <textarea 
              required 
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--neutral-300)', background: 'var(--bg)', color: 'var(--text)', outline: 'none', fontSize: '0.95rem', resize: 'none', fontFamily: 'inherit' }} 
            />
          </div>

          <button type="submit" className="btn btn--primary btn--lg" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '0.5rem' }}>
            <Send size={16} /> {dict.form_submit}
          </button>
        </form>
      )}
    </div>
  );
}
