import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'gold' | 'navy' | 'coral' | 'green' | 'gray';
}

const variantClasses: Record<string, string> = {
  gold: 'badge--gold',
  navy: 'badge--navy',
  coral: 'badge--coral',
  green: 'badge--green',
  gray: 'badge--gray',
};

export default function Badge({ label, variant = 'gold' }: BadgeProps) {
  return (
    <span className={`badge ${variantClasses[variant]}`}>{label}</span>
  );
}
