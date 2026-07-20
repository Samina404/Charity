import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  accent?: boolean;
}

const alignClasses = {
  left: 'items-start text-left',
  center: 'items-center text-center',
  right: 'items-end text-right',
};

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  accent = true,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${alignClasses[align]}`}>
      {accent && <span className="section-heading__accent" />}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
