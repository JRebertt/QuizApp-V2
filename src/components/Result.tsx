interface ScoreProps {
  score: number;
  questions: number;
}
export function Result({ score, questions }: ScoreProps) {
  return (
    <div>
      <div className="flex items-center justify-center text-2xl p-20">
        Você acertou {score} de {questions}
      </div>
    </div>
  );
}
