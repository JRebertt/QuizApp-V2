import { useState } from "react";
import clsx from "clsx";
import { AnswersButton } from "./components/AnswersButton";
import { questions } from "./data/questions";

interface CorrectProps {
  isCorrect: boolean;
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const correct = questions[currentQuestion].answerOptions.map(
    (_) => _.isCorrect
  );
  const [isCorrect] = useState<{}>();

  function handleAnswerButtonClick({ isCorrect }: CorrectProps) {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    nextQuestion < questions.length
      ? setCurrentQuestion(nextQuestion)
      : setShowScore(true);
  }

  console.log(correct);
  return (
    <div className="bg-[#252d4a] text-white absolute rounded-2xl w-11/12 max-w-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ease-in-out duration-300 shadow-2xl">
      {showScore ? (
        <div className="flex items-center justify-center text-2xl p-20">
          Your {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="flex justify-center flex-col sm:flex-row sm:justify-between px-6 py-10 gap-10">
            <div className="w-80 flex flex-col items-center sm:justify-start gap-5">
              <div>
                <span className="font-medium text-2xl pr-1 select-none	">
                  Question {currentQuestion + 1}
                </span>
                <span>/{questions.length} </span>
              </div>
              <div className="text-lg font-semibold py-2">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              {questions[currentQuestion].answerOptions.map((answer, i) => {
                return (
                  <span key={i}>
                    <button
                      type="button"
                      className={clsx(
                        "bg-[#252d4a] w-full sm:w-64 flex justify-center items-center border-4 border-[#234668] px-2 py-5 h-10 rounded-lg hover:bg-[#555e7d]"
                      )}
                      onClick={() => handleAnswerButtonClick(answer.isCorrect)}
                    >
                      {answer.answerText}
                    </button>
                  </span>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;