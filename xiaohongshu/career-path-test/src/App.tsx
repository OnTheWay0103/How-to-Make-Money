import { useState } from 'react';
import { useTestEngine } from './hooks/useTestEngine';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import FullReport from './components/FullReport';
import ShareCard from './components/ShareCard';
import testData from './data/career-test.json';
import './App.css';

function App() {
  const engine = useTestEngine();
  const [showShare, setShowShare] = useState(false);

  return (
    <div className="app">
      {/* 欢迎页 */}
      {engine.screen === 'welcome' && (
        <WelcomeScreen
          onStart={engine.startTest}
          title={testData.meta.title}
          subtitle={testData.meta.subtitle}
          description={testData.meta.description}
          questionCount={testData.meta.questionCount}
          estimatedMinutes={testData.meta.estimatedMinutes}
          dimensions={engine.dimensions}
        />
      )}

      {/* 答题页 */}
      {engine.screen === 'questions' && engine.currentQ && (
        <QuestionScreen
          question={engine.currentQ}
          onSelect={engine.selectAnswer}
          questionNumber={engine.currentQuestion}
          totalQuestions={engine.totalQuestions}
        />
      )}

      {/* 免费结果页 */}
      {engine.screen === 'result' && engine.result && engine.displayScores && (
        <ResultScreen
          displayScores={engine.displayScores}
          rawScores={engine.displayScores}
          result={engine.result}
          dimensions={engine.dimensions}
          questionCount={testData.meta.questionCount}
          onUnlock={engine.unlockFullReport}
        />
      )}

      {/* 完整报告页 */}
      {engine.screen === 'fullReport' && engine.result && engine.displayScores && (
        <FullReport
          result={engine.result}
          displayScores={engine.displayScores}
          dimensions={engine.dimensions}
          onShare={() => setShowShare(true)}
        />
      )}

      {/* 分享卡片弹窗 */}
      {showShare && engine.result && (
        <ShareCard
          result={engine.result}
          onClose={() => setShowShare(false)}
        />
      )}
    </div>
  );
}

export default App;
