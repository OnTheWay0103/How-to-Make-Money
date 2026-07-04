import { useState, useCallback } from 'react';
import {
  calculateScores,
  normalizedScores,
  determineResult,
} from '../utils/scoring';
import type { DimensionScores, TestResult } from '../utils/scoring';
import testData from '../data/career-test.json';

export type Screen = 'welcome' | 'questions' | 'result' | 'fullReport';

export function useTestEngine() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [rawScores, setRawScores] = useState<DimensionScores | null>(null);
  const [displayScores, setDisplayScores] = useState<DimensionScores | null>(null);
  const [result, setResult] = useState<TestResult | null>(null);
  const [hasPaid, setHasPaid] = useState(false);

  const totalQuestions = testData.meta.questionCount;
  const questions = testData.questions;
  const dimensions = testData.dimensions;

  const startTest = useCallback(() => {
    setScreen('questions');
    setCurrentQuestion(0);
    setAnswers({});
    setHasPaid(false);
  }, []);

  const selectAnswer = useCallback(
    (optionIndex: number) => {
      const q = questions[currentQuestion];
      const newAnswers = { ...answers, [q.id]: optionIndex };
      setAnswers(newAnswers);

      if (currentQuestion + 1 < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // 完成所有题目
        const raw = calculateScores(newAnswers);
        const display = normalizedScores(raw);
        const resultType = determineResult(display);
        setRawScores(raw);
        setDisplayScores(display);
        setResult(resultType);
        setScreen('result');
      }
    },
    [currentQuestion, answers, questions, totalQuestions]
  );

  const goBack = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }, [currentQuestion]);

  const unlockFullReport = useCallback(() => {
    setHasPaid(true);
    setScreen('fullReport');
  }, []);

  const progress = ((currentQuestion) / totalQuestions) * 100;
  const currentQ = questions[currentQuestion];

  return {
    screen,
    currentQuestion,
    totalQuestions,
    progress,
    currentQ,
    answers,
    rawScores,
    displayScores,
    result,
    dimensions,
    hasPaid,
    startTest,
    selectAnswer,
    goBack,
    unlockFullReport,
  };
}
