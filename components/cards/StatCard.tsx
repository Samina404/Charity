import type { Stat } from '@/types';
import CounterAnimation from '@/components/common/CounterAnimation';
import { Users, Coins, Globe, HeartHandshake } from 'lucide-react';
import type { ComponentType } from 'react';

interface StatCardProps {
  stat: Stat;
}

const StatIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  children: Users,
  funds: Coins,
  communities: Globe,
  volunteers: HeartHandshake,
};

export default function StatCard({ stat }: StatCardProps) {
  const IconComponent = StatIcons[stat.icon];

  return (
    <div className="stat-card">
      <div className="stat-card__icon" aria-hidden="true">
        {IconComponent ? <IconComponent size={32} className="text-[var(--gold-500)]" /> : null}
      </div>
      <div className="stat-card__value">
        <CounterAnimation
          value={stat.value}
          suffix={stat.suffix}
          duration={2200}
          className="stat-card__number"
        />
      </div>
      <p className="stat-card__label">{stat.label}</p>
    </div>
  );
}
