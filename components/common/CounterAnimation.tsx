'use client';

import { useIntersection } from '@/hooks/useIntersection';
import { useCountUp } from '@/hooks/useCountUp';

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

function Counter({ value, suffix = '', duration = 2000, className = '' }: CounterAnimationProps) {
  const count = useCountUp({ end: value, duration });
  return (
    <span className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function CounterAnimation({
  value,
  suffix = '',
  duration = 2000,
  className = '',
}: CounterAnimationProps) {
  const [ref, isVisible] = useIntersection({ threshold: 0.3, once: true });

  return (
    <div ref={ref}>
      {isVisible ? (
        <Counter value={value} suffix={suffix} duration={duration} className={className} />
      ) : (
        <span className={className}>0{suffix}</span>
      )}
    </div>
  );
}
