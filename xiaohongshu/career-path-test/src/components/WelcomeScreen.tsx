import { type FC } from 'react';

interface Props {
  onStart: () => void;
  title: string;
  subtitle: string;
  description: string;
  questionCount: number;
  estimatedMinutes: number;
  dimensions: Array<{ key: string; label: string; icon: string; desc: string }>;
}

const WelcomeScreen: FC<Props> = ({ onStart, title, subtitle, description, questionCount, estimatedMinutes, dimensions }) => {
  return (
    <div className="screen welcome-screen">
      <div className="welcome-content">
        {/* 顶部品牌区 */}
        <div className="welcome-brand">
          <span className="brand-badge">职业成长探索</span>
        </div>

        {/* 核心标题 */}
        <h1 className="welcome-title">{title}</h1>
        <p className="welcome-subtitle">{subtitle}</p>
        <p className="welcome-desc">{description}</p>

        {/* 测试信息 */}
        <div className="test-meta">
          <span className="meta-item">📝 {questionCount} 题</span>
          <span className="meta-divider">·</span>
          <span className="meta-item">⏱ 约 {estimatedMinutes} 分钟</span>
        </div>

        {/* 四个维度 */}
        <div className="dimension-grid">
          {dimensions.map((d) => (
            <div key={d.key} className="dimension-card">
              <span className="dimension-icon">{d.icon}</span>
              <span className="dimension-label">{d.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="btn-primary btn-start" onClick={onStart}>
          开始测试，看清你的职业路径
        </button>

        <p className="trust-text">
          已有 12,800+ 人完成测试 · 结果仅自己可见
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
