import { useNavigate } from "react-router-dom";

export function Home() {

  const navigate  = useNavigate()
  return (
    <div>
      <h2>Hello Word</h2>
      <button className="h-16 w-16 bg-green-600" onClick={() => {navigate('/quizzes')}}>Start</button>
    </div>
  );
}
