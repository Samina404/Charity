'use client';

import { useState } from 'react';
import type { FAQ } from '@/types';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="faq-accordion">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`faq-accordion__item ${isOpen ? 'faq-accordion__item--open' : ''}`}
          >
            <button
              id={`faq-btn-${faq.id}`}
              className="faq-accordion__trigger"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${faq.id}`}
              onClick={() => toggle(faq.id)}
            >
              <span>{faq.question}</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 text-[var(--gold-500)] ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-panel-${faq.id}`}
              role="region"
              aria-labelledby={`faq-btn-${faq.id}`}
              className="faq-accordion__panel"
              hidden={!isOpen}
            >
              <p className="faq-accordion__answer">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
