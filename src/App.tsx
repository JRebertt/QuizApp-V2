import { useState } from "react";
import clsx from "clsx";

import { AnswersButton } from "./components/AnswersButton";
import { Result } from "./components/Result";

import { questions } from "./data/questions";

import HappyBrain from "./assets/HappyBrain.svg";
import SadBrain from "./assets/SadBrain.svg";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showResult, setShowResult] = useState<boolean | null>(null);

  // const [ progress, setProgress ] = useState();

  function handleAnswerButtonClick(isCorrect: boolean) {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    nextQuestion < questions.length
      ? setTimeout(() => {
          setCurrentQuestion(nextQuestion);
          setShowResult(false);
        }, 700)
      : setShowScore(true);

    // console.log(isCorrect);
  }

  // function shuffleArrayWithoutRepetitions(array: any[]) {
  //   const indices = Array.from({ length: array.length }, (_, i) => i);
  //   const shuffledIndices = indices.sort(() => Math.random() - 0.5);
  //   const shuffledArray = [];

  //   for (const index of shuffledIndices) {
  //     shuffledArray.push(array[index]);
  //   }

  //   return shuffledArray;
  // }

  // const shuffledArray = shuffleArrayWithoutRepetitions(questions);
  // console.log(shuffledArray);

  function handleCheckIsCorrectButton(isCorrect: boolean) {
    setShowResult(isCorrect);
  }

  const options = questions[currentQuestion].answerOptions;

  // console.log(
  //   options.forEach((obj, i) => {
  //     console.log(obj);
  //     console.log(i);
  //   })
  // );

  return (
    <>
      <div className="bg-[#252d4a] text-white absolute rounded-2xl w-11/12 max-w-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ease-in-out duration-300 shadow-2xl">
        {showScore ? (
          score > questions.length / 2 ? (
            <div className="flex justify-center flex-col pt-10">
              <img className="h-40" src={HappyBrain} alt="Cerebro Triste" />
              <h1 className="text-4xl font-semibold flex justify-center">
                Que Pena
              </h1>
              <Result questions={questions.length} score={score} />
            </div>
          ) : (
            <div className="flex justify-center flex-col pt-10">
              <img className="h-40" src={SadBrain} alt="Cerebro Triste" />
              <h1 className="text-4xl font-semibold flex justify-center">
                Que Pena
              </h1>
              <Result questions={questions.length} score={score} />
            </div>
          )
        ) : (
          <>
            <div className="flex justify-center flex-col sm:flex-row sm:justify-between px-6 py-10 gap-10">
              <div className="w-80 flex flex-col items-center sm:justify-start gap-5">
                <div>
                  <span className="font-medium text-2xl pr-1 select-none	">
                    Perguntas {currentQuestion + 1}
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
                      <AnswersButton
                        type="button"
                        className={clsx(
                          "bg-[#252d4a] w-full sm:w-64 flex justify-center items-center border-4 border-[#234668] px-2 py-6 h-10 rounded-lg hover:bg-[#555e7d]",
                          {
                            "bg-rose-500 hover:bg-rose-400":
                              showResult === true && answer.isCorrect === false,
                            "bg-green-500 hover:bg-green-400":
                              showResult === true && answer.isCorrect === true,
                          }
                        )}
                        onClick={() => {
                          handleAnswerButtonClick(answer.isCorrect);
                          handleCheckIsCorrectButton(true);
                        }}
                      >
                        {answer.answerText}
                      </AnswersButton>
                    </span>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
