import clsx from "clsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./lib/firebase";

import { AnswersButton } from "./components/AnswersButton";
import { Result } from "./components/Result";

import { questions } from "./data/questions";

import HappyBrain from "./assets/HappyBrain.svg";
import SadBrain from "./assets/SadBrain.svg";

interface AnswerOption {
  answerTitle: string;
  isCorrect: boolean;
}

interface Question {
  answerOptions: AnswerOption[];
  number: number;
  questionTitle: string;
  icon: string;
}

interface Quiz {
  id: string;
  name: string;
  questions: Question[];
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showResult, setShowResult] = useState<boolean | null>(null);

  const [amountQuestions, setAmoutQuestions] = useState(0);

  const [dataQuestion, setDataQuestion] = useState<Quiz | null>();
  const { id } = useParams();

  const message = score > questions.length / 2 ? "Parabéns" : "Que pena";

  const docRef = doc(db, `quizzes`, `${id}`);

  useEffect(() => {
    const getData = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = { ...docSnap.data(), id: docSnap.id } as Quiz;
        // setDataQuestion(data.questions[currentQuestion]);
        setDataQuestion(data);
        setAmoutQuestions(data.questions.length);
      } else {
        console.log("O documento não foi encontrado.");
      }
    };
    getData();
  }, [currentQuestion]);

  function handleAnswerButtonClick(isCorrect: boolean) {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    nextQuestion < amountQuestions
      ? setTimeout(() => {
          setCurrentQuestion(nextQuestion);
          setShowResult(false);
        }, 700)
      : setShowScore(true);

    // console.log(isCorrect);
  }

  function handleCheckIsCorrectButton(isCorrect: boolean) {
    setShowResult(isCorrect);
  }

  // if (dataQuestion !== undefined) {
  //   console.log(dataQuestion);
  // }

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
          <div className="flex justify-center flex-col pt-10">
            <img
              className="h-40"
              src={score > amountQuestions / 2 ? HappyBrain : SadBrain}
              alt="Cerebro Triste"
            />
            <h1 className="text-4xl font-semibold flex justify-center">
              {message}
            </h1>
            <Result questions={questions.length} score={score} />
          </div>
        ) : (
          <>
            <div className="flex justify-center flex-col sm:flex-row sm:justify-between px-6 py-10 gap-10">
              <div className="w-80 flex flex-col items-center sm:justify-start gap-5">
                <div>
                  <span className="font-medium text-2xl pr-1 select-none	">
                    Perguntas {currentQuestion + 1}
                  </span>
                  <span>/{dataQuestion?.questions.length} </span>
                </div>
                <div className="text-lg font-semibold py-2">
                  {dataQuestion?.questions[currentQuestion].questionTitle}
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                {dataQuestion?.questions[currentQuestion].answerOptions.map(
                  (answer, i) => {
                    return (
                      <span key={i}>
                        <AnswersButton
                          type="button"
                          className={clsx(
                            "bg-[#252d4a] w-full sm:w-64 flex justify-center items-center border-4 border-[#234668] px-2 py-6 h-10 rounded-lg hover:bg-[#555e7d]",
                            {
                              "bg-rose-500 hover:bg-rose-400":
                                showResult === true &&
                                answer.isCorrect === false,
                              "bg-green-500 hover:bg-green-400":
                                showResult === true &&
                                answer.isCorrect === true,
                            }
                          )}
                          onClick={() => {
                            handleAnswerButtonClick(answer.isCorrect);
                            handleCheckIsCorrectButton(true);
                          }}
                        >
                          {answer.answerTitle}
                        </AnswersButton>
                      </span>
                    );
                  }
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
