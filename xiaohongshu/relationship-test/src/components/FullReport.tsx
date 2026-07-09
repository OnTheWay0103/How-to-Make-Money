import { type FC, useRef } from 'react';
import type { TestResult, DimensionScores } from '../utils/scoring';

interface Props {
  result: TestResult;
  displayScores: DimensionScores;
  dimensions: Array<{ key: string; label: string; icon: string; desc: string }>;
  onShare: () => void;
}

const FullReport: FC<Props> = ({ result, displayScores, dimensions, onShare }) => {
  const reportRef = useRef<HTMLDivElement>(null);

  const getScoreColor = (score: number) => {
    if (score >= 70) return '#10b981';
    if (score >= 45) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div className="screen full-report-screen">
      <div className="report-content" ref={reportRef}>
        {/* 报告头部 */}
        <div className="report-header">
          <span className="report-badge">完整报告 · 已解锁</span>
          <h2>{result.icon} 你属于：{result.label}</h2>
          <p className="report-tagline">「{result.tagline}」</p>
        </div>

        {/* 四维度深度分析 */}
        <div className="report-sections">
          {result.fullReport.dimensions.map((dim) => {
            const dimMeta = dimensions.find((d) => d.key === dim.key)!;
            return (
              <div key={dim.key} className="report-section">
                <div className="section-header">
                  <span className="section-icon">{dimMeta.icon}</span>
                  <div className="section-title-row">
                    <h3>{dimMeta.label}</h3>
                    <span
                      className="section-score"
                      style={{ color: getScoreColor(dim.score) }}
                    >
                      {dim.score}
                    </span>
                  </div>
                </div>
                <p className="section-desc">{dimMeta.desc}</p>
                <div className="section-bar-track">
                  <div
                    className="section-bar-fill"
                    style={{
                      width: `${dim.score}%`,
                      backgroundColor: getScoreColor(dim.score),
                    }}
                  />
                </div>
                <p className="section-analysis">{dim.text}</p>
              </div>
            );
          })}
        </div>

        {/* 行动建议 */}
        <div className="report-actions">
          <h3>📌 给你的 3 条行动建议</h3>
          <ol className="actions-list">
            {result.fullReport.actions.map((action, idx) => (
              <li key={idx}>{action}</li>
            ))}
          </ol>
        </div>

        {/* 免责声明 */}
        <p className="report-disclaimer">
          本测试属于职业成长探索内容，仅用于个人决策参考，不构成职业规划建议。
        </p>
      </div>

      {/* 底部分享按钮 */}
      <div className="report-footer-bar">
        <button className="btn-secondary" onClick={onShare}>
          📤 分享你的结果
        </button>
      </div>
    </div>
  );
};

export default FullReport;
