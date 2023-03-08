import { QuizCard } from "../components/QuizCard";

export function QuizzesList() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-xl font-medium mt-6">
        Qual tema você quer realizar?
      </h1>
      <span className="mt-1 text-sm text-zinc-400">
        Inicie escolhendo um dos testes da lista abaixo
      </span>
      <div className="flex flex-col sm:flex-row gap-2">
        <QuizCard />
        <QuizCard />
      </div>
    </div>
  );
}
