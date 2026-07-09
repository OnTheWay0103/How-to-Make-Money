import testData from '../data/career-test.json';

export interface DimensionScores {
  match: number;
  growth: number;
  transfer: number;
  motive: number;
}

export interface TestResult {
  typeId: string;
  label: string;
  icon: string;
  tagline: string;
  freeSummary: string;
  fullReport: {
    dimensions: Array<{
      key: string;
      score: number;
      text: string;
    }>;
    actions: string[];
  };
}

// 计算四个维度的总分
export function calculateScores(answers: Record<number, number>): DimensionScores {
  const scores: DimensionScores = { match: 0, growth: 0, transfer: 0, motive: 0 };

  testData.questions.forEach((q) => {
    const chosenIndex = answers[q.id];
    if (chosenIndex !== undefined) {
      const option = q.options[chosenIndex];
      scores.match += option.scores.match;
      scores.growth += option.scores.growth;
      scores.transfer += option.scores.transfer;
      scores.motive += option.scores.motive;
    }
  });

  return scores;
}

// 将原始分数映射到 0-100 的展示分数
export function normalizeScore(raw: number, max: number): number {
  // 每题每维度最多±3分，12题 = ±36，映射到 0-100
  const normalized = ((raw + max) / (2 * max)) * 100;
  return Math.round(Math.max(5, Math.min(95, normalized)));
}

const MAX_SCORE = 36; // 12 questions × max 3 points per dimension

export function normalizedScores(raw: DimensionScores): DimensionScores {
  return {
    match: normalizeScore(raw.match, MAX_SCORE),
    growth: normalizeScore(raw.growth, MAX_SCORE),
    transfer: normalizeScore(raw.transfer, MAX_SCORE),
    motive: normalizeScore(raw.motive, MAX_SCORE),
  };
}

// 根据四维得分确定结果类型
export function determineResult(scores: DimensionScores): TestResult {
  const avg = (scores.match + scores.growth + scores.transfer + scores.motive) / 4;

  // 深耕型：match + growth 高，motive 低
  if (scores.match >= 50 && scores.growth >= 50 && scores.motive <= 50) {
    return getResultById('deepen');
  }

  // 转型型：match + growth 低，transfer + motive 高
  if (scores.match < 45 && scores.growth < 45 && scores.transfer >= 55 && scores.motive >= 55) {
    return getResultById('pivot');
  }

  // 沉淀型：match + growth 高，motive 很低
  if (scores.match >= 60 && scores.growth >= 55 && scores.motive < 40) {
    return getResultById('settle');
  }

  // 转型型备选：match 很低，motive 很高
  if (scores.match < 35 && scores.motive >= 65) {
    return getResultById('pivot');
  }

  // 默认：探索型
  return getResultById('explore');
}

function getResultById(id: string): TestResult {
  const result = testData.resultTypes.find((r) => r.id === id)!;

  // 将 fullReport 中的维度得分从配置值映射
  const raw = calculateScores({}); // won't be used — placeholder
  const adjusted = { ...result.fullReport };

  return { ...result, fullReport: adjusted };
}
