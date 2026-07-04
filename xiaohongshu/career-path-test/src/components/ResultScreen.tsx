import { type FC } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import type { DimensionScores, TestResult } from '../utils/scoring';
import type { DimensionScores as RawScores } from '../utils/scoring';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// 原始分数（用于 PaywallBanner）
export type { DimensionScores, TestResult };

interface Props {
  displayScores: DimensionScores;
  rawScores: DimensionScores;
  result: TestResult;
  dimensions: Array<{ key: string; label: string; icon: string; desc: string }>;
  questionCount: number;
  onUnlock: () => void;
}

const ResultScreen: FC<Props> = ({ displayScores, result, dimensions, questionCount, onUnlock }) => {
  const chartData = {
    labels: dimensions.map((d) => d.label),
    datasets: [
      {
        label: '你的得分',
        data: dimensions.map((d) => displayScores[d.key as keyof DimensionScores]),
        backgroundColor: 'rgba(99, 102, 241, 0.15)',
        borderColor: 'rgba(99, 102, 241, 0.8)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: { stepSize: 20, display: false },
        pointLabels: { font: { size: 13 } },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="screen result-screen">
      <div className="result-content">
        {/* 结果标签 */}
        <div className="result-header">
          <span className="result-icon">{result.icon}</span>
          <h2 className="result-type-label">你的职业类型</h2>
          <div className="result-type-name">{result.label}</div>
          <p className="result-tagline">「{result.tagline}」</p>
        </div>

        {/* 雷达图 */}
        <div className="radar-container">
          <Radar data={chartData} options={chartOptions} />
        </div>

        {/* 维度简要说明 */}
        <div className="dimension-briefs">
          {dimensions.map((d) => (
            <div key={d.key} className="brief-item">
              <span className="brief-icon">{d.icon}</span>
              <span className="brief-label">{d.label}</span>
              <span className="brief-score">{displayScores[d.key as keyof DimensionScores]}</span>
            </div>
          ))}
        </div>

        {/* 免费结论 */}
        <div className="free-conclusion">
          <h3>📋 简要结论</h3>
          <p>{result.freeSummary}</p>
        </div>

        {/* 付费墙 */}
        <div className="paywall-banner">
          <div className="paywall-glow" />
          <div className="paywall-content">
            <span className="paywall-icon">🔒</span>
            <h3>查看完整报告</h3>
            <p>含 4 维度深度分析 + 3 条具体行动建议</p>
            <button className="btn-primary btn-unlock" onClick={onUnlock}>
              ¥3.9 解锁完整报告
            </button>
            <p className="paywall-hint">
              已有 3,200+ 人解锁 · 不满意可退款
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
