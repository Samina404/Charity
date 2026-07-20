import Link from 'next/link';
import type { DonationTier } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import { Locale } from '@/lib/dictionary';

interface DonationTierCardProps {
  tier: DonationTier;
  lang: Locale;
}

export default function DonationTierCard({ tier, lang }: DonationTierCardProps) {
  const popularLabel = lang === 'ar' ? 'الأكثر شيوعاً' : lang === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular';
  const periodLabel = lang === 'ar' ? '/شهر' : lang === 'bn' ? '/মাস' : '/mo';
  const ctaLabel = lang === 'ar' ? '/ شهرياً' : lang === 'bn' ? '/ প্রতি মাসে' : ' / Month';

  return (
    <div className={`donation-tier-card ${tier.popular ? 'donation-tier-card--popular' : ''}`}>
      {tier.popular && (
        <div className="donation-tier-card__badge">{popularLabel}</div>
      )}

      <div className="donation-tier-card__amount">
        <span className="donation-tier-card__currency">$</span>
        <span className="donation-tier-card__number">{tier.amount}</span>
        <span className="donation-tier-card__period">{periodLabel}</span>
      </div>

      <h3 className="donation-tier-card__title">{tier.title}</h3>
      <p className="donation-tier-card__desc">{tier.description}</p>

      <div className="donation-tier-card__impact flex items-start gap-1.5">
        <Sparkles size={16} className="text-[var(--gold-500)] mt-1 flex-shrink-0" />
        <span>{tier.impact}</span>
      </div>

      <Link
        href={`/${lang}/donate?amount=${tier.amount}`}
        className={`btn ${tier.popular ? 'btn--primary' : 'btn--outline'} donation-tier-card__cta`}
      >
        {formatCurrency(tier.amount)}{ctaLabel}
      </Link>
    </div>
  );
}
