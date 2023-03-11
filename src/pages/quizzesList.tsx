import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
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
  }, [quizzes]);

  return (
    <div className="max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-xl font-bold mt-6">Qual tema você quer realizar?</h1>
      <span className="mt-1 text-sm text-zinc-400">
        Inicie escolhendo um dos testes da lista abaixo
      </span>
      <div className="flex flex-col flex-wrap sm:flex-row gap-2 px-10">
        {quizzes.map((quizz) => {
          return (
            <Link key={quizz.id} to={`quiz/${quizz.id}`}>
              <QuizCard title={quizz.name} description={quizz.description} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
