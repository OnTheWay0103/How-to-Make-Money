import { type FC, useRef, useEffect } from 'react';
import type { TestResult } from '../utils/scoring';

interface Props {
  result: TestResult;
  onClose: () => void;
}

const ShareCard: FC<Props> = ({ result, onClose }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 关闭弹窗（点击背景）
  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="share-overlay" onClick={handleBackdrop}>
      <div className="share-card" ref={cardRef}>
        <div className="share-card-inner">
          {/* 顶部装饰 */}
          <div className="share-header">
            <span className="share-badge">职业路径决策测试</span>
          </div>

          {/* 结果 */}
          <div className="share-result">
            <span className="share-icon">{result.icon}</span>
            <div className="share-type">{result.label}</div>
            <p className="share-tagline">「{result.tagline}」</p>
          </div>

          {/* 引导文案 */}
          <div className="share-cta">
            <p>想知道你的职业路径类型？</p>
            <div className="share-qr-placeholder">
              <span>📱</span>
              <p>扫码免费测试</p>
              <p className="share-qr-hint">3 分钟 · 12 题 · 专属诊断报告</p>
            </div>
          </div>

          {/* 品牌 */}
          <div className="share-footer">
            <p>职业成长探索 · 认识你自己</p>
          </div>
        </div>

        <button className="share-close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default ShareCard;
