import { type FC } from 'react';

interface Question {
  id: number;
  text: string;
  options: Array<{ label: string; text: string }>;
}

interface Props {
  question: Question;
  onSelect: (index: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionScreen: FC<Props> = ({ question, onSelect, questionNumber, totalQuestions }) => {
  return (
    <div className="screen question-screen">
      <div className="question-content">
        {/* 进度指示 */}
        <div className="question-progress-mini">
          <div className="mini-track">
            <div
              className="mini-fill"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            />
          </div>
          <span className="mini-count">{questionNumber + 1}/{totalQuestions}</span>
        </div>

        {/* 题目 */}
        <div className="question-card">
          <h2 className="question-text">{question.text}</h2>
        </div>

        {/* 选项 */}
        <div className="options-list">
          {question.options.map((opt, idx) => (
            <button
              key={opt.label}
              className="option-card"
              onClick={() => onSelect(idx)}
            >
              <span className="option-label">{opt.label}</span>
              <span className="option-text">{opt.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
