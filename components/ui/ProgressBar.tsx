import React from 'react';
import { calculateProgress } from '@/lib/utils';

interface ProgressBarProps {
  raised: number;
  goal: number;
  showLabel?: boolean;
}

export default function ProgressBar({ raised, goal, showLabel = true }: ProgressBarProps) {
  const percent = calculateProgress(raised, goal);

  return (
    <div className="progress-bar">
      {showLabel && (
        <div className="progress-bar__labels">
          <span className="progress-bar__raised">${raised.toLocaleString()} raised</span>
          <span className="progress-bar__percent">{percent}%</span>
        </div>
      )}
      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <p className="progress-bar__goal">Goal: ${goal.toLocaleString()}</p>
    </div>
  );
}
