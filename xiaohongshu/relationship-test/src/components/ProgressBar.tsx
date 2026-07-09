import { type FC } from 'react';

interface Props {
  current: number;
  total: number;
  onBack?: () => void;
}

const ProgressBar: FC<Props> = ({ current, total, onBack }) => {
  const pct = (current / total) * 100;

  return (
    <div className="progress-header">
      {onBack && (
        <button className="btn-back" onClick={onBack}>
          ← 上一题
        </button>
      )}
      <div className="progress-info">
        <span className="progress-count">{current + 1}/{total}</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
