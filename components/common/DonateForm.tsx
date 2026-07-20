'use client';

import { useState } from 'react';
import { getDonationTiers } from '@/data/donation';
import { formatCurrency } from '@/lib/utils';
import { Locale } from '@/lib/dictionary';

interface DonateFormProps {
  lang: Locale;
  dict: {
    tier: string;
    custom: string;
    frequency: string;
    one_time: string;
    monthly: string;
    info_title: string;
    name: string;
    email: string;
    phone: string;
    billing: string;
    submit: string;
    processing: string;
    secure: string;
  };
}

export default function DonateForm({ lang, dict }: DonateFormProps) {
  const tiers = getDonationTiers(lang);
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'monthly' | 'once'>('monthly');
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount > 0) setSubmitted(true);
  };

  const popularLabel = lang === 'ar' ? 'الأكثر شيوعاً' : lang === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular';
  const successTitle = lang === 'ar' ? 'شكراً لك!' : lang === 'bn' ? 'আপনাকে ধন্যবাদ!' : 'Thank You!';
  const anotherGiftBtn = lang === 'ar' ? 'تقديم هدية أخرى' : lang === 'bn' ? 'আরেকটি অনুদান করুন' : 'Make Another Gift';

  if (submitted) {
    return (
      <div className="donate-form__success">
        <div className="donate-form__success-icon">🎉</div>
        <h3>{successTitle}</h3>
        <p>
          {lang === 'ar' ? (
            <>
              هدية تبرعك {frequency === 'monthly' ? 'الشهرية' : 'لمرة واحدة'} بقيمة{' '}
              <strong>{formatCurrency(finalAmount)}</strong> تصنع فارقاً حقيقياً.
            </>
          ) : lang === 'bn' ? (
            <>
              আপনার {frequency === 'monthly' ? 'মাসিক' : 'এককালীন'}{' '}
              <strong>{formatCurrency(finalAmount)}</strong> অনুদান শিশুদের জীবনে ইতিবাচক পরিবর্তন তৈরি করছে।
            </>
          ) : (
            <>
              Your {frequency === 'monthly' ? 'monthly' : 'one-time'} gift of{' '}
              <strong>{formatCurrency(finalAmount)}</strong> is making a real difference.
            </>
          )}
        </p>
        <button className="btn btn--primary" onClick={() => setSubmitted(false)}>
          {anotherGiftBtn}
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
          {dict.monthly}
        </button>
        <button
          type="button"
          className={`donate-form__freq-btn ${frequency === 'once' ? 'donate-form__freq-btn--active' : ''}`}
          onClick={() => setFrequency('once')}
        >
          {dict.one_time}
        </button>
      </div>

      {/* Amount presets */}
      <div className="donate-form__amounts">
        {tiers.map((tier) => (
          <button
            key={tier.id}
            type="button"
            className={`donate-form__amount-btn ${selectedAmount === tier.amount && !customAmount ? 'donate-form__amount-btn--active' : ''}`}
            onClick={() => { setSelectedAmount(tier.amount); setCustomAmount(''); }}
          >
            {formatCurrency(tier.amount)}
            {tier.popular && <span className="donate-form__popular">{popularLabel}</span>}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div className="donate-form__custom">
        <label htmlFor="customAmount" className="donate-form__label">{dict.custom}</label>
        <div className="donate-form__custom-wrap">
          <span className="donate-form__currency">$</span>
          <input
            id="customAmount"
            type="number"
            min="1"
            step="1"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder={lang === 'ar' ? 'أدخل المبلغ' : lang === 'bn' ? 'পরিমাণ লিখুন' : 'Enter amount'}
            className="donate-form__input"
          />
        </div>
      </div>

      <button type="submit" className="btn btn--primary donate-form__submit">
        {dict.submit} {formatCurrency(finalAmount)} {frequency === 'monthly' ? (lang === 'ar' ? '/ شهرياً' : lang === 'bn' ? '/ প্রতি মাসে' : '/ Month') : ''}
      </button>

      <p className="donate-form__note">🔒 {dict.secure}</p>
    </form>
  );
}
