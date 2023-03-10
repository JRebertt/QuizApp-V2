import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListProps, QuizCard } from "../components/QuizCard";
import { db } from "../lib/firebase";

export function QuizzesList() {
  const [quizzes, setQuizzes] = useState<ListProps[]>([]);
  const collectionRef = collection(db, "quizzes");
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);
      setQuizzes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-xl font-medium mt-6">
        Qual tema você quer realizar?
      </h1>
      <span className="mt-1 text-sm text-zinc-400">
        Inicie escolhendo um dos testes da lista abaixo
      </span>
      <div className="flex flex-col sm:flex-row gap-2">
        {quizzes.map((quizz, i) => {
          return (
            <span key={i}>
              <QuizCard
                title={quizz.id}
                description={quizz.description}
                click={() => {
                  // navigate(`/${id}`)
                }}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
