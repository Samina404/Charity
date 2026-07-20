'use client';

import { useState } from 'react';
import { donationTiers } from '@/data/donation';
import { formatCurrency } from '@/lib/utils';

export default function DonateForm() {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'monthly' | 'once'>('monthly');
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount > 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="donate-form__success">
        <div className="donate-form__success-icon">🎉</div>
        <h3>Thank You!</h3>
        <p>Your {frequency === 'monthly' ? 'monthly' : 'one-time'} gift of{' '}
          <strong>{formatCurrency(finalAmount)}</strong> is making a real difference.
        </p>
        <button className="btn btn--primary" onClick={() => setSubmitted(false)}>
          Make Another Gift
        </button>
      </div>
    );
  }

  return (
    <form className="donate-form" onSubmit={handleSubmit} noValidate>
      {/* Frequency */}
      <div className="donate-form__frequency">
        <button
          type="button"
          className={`donate-form__freq-btn ${frequency === 'monthly' ? 'donate-form__freq-btn--active' : ''}`}
          onClick={() => setFrequency('monthly')}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`donate-form__freq-btn ${frequency === 'once' ? 'donate-form__freq-btn--active' : ''}`}
          onClick={() => setFrequency('once')}
        >
          One-time
        </button>
      </div>

      {/* Amount presets */}
      <div className="donate-form__amounts">
        {donationTiers.map((tier) => (
          <button
            key={tier.id}
            type="button"
            className={`donate-form__amount-btn ${selectedAmount === tier.amount && !customAmount ? 'donate-form__amount-btn--active' : ''}`}
            onClick={() => { setSelectedAmount(tier.amount); setCustomAmount(''); }}
          >
            {formatCurrency(tier.amount)}
            {tier.popular && <span className="donate-form__popular">Most Popular</span>}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div className="donate-form__custom">
        <label htmlFor="customAmount" className="donate-form__label">Custom Amount</label>
        <div className="donate-form__custom-wrap">
          <span className="donate-form__currency">$</span>
          <input
            id="customAmount"
            type="number"
            min="1"
            step="1"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder="Enter amount"
            className="donate-form__input"
          />
        </div>
      </div>

      <button type="submit" className="btn btn--primary donate-form__submit">
        Donate {formatCurrency(finalAmount)} {frequency === 'monthly' ? '/ Month' : 'Once'}
      </button>

      <p className="donate-form__note">🔒 Secure payment · 100% tax deductible</p>
    </form>
  );
}
