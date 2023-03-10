import { createBrowserRouter, useParams } from "react-router-dom";

import App from "../App";
import { AuthRoutes } from "../components/AuthRoutes";
import { ContentTest } from "../pages/contentTest";
import { Home } from "../pages/Home";
import { QuizzesList } from "../pages/quizzesList";
import { SignIn } from "../pages/signIn";

export const router = createBrowserRouter([
  {
    path: "/quizzes/quiz/:id",
    element: <App />,
  },
  {
    path: "/test",
    element: (
      <AuthRoutes>
        <ContentTest />
      </AuthRoutes>
    ),
  },
  {
    path: "/auth",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <QuizzesList />,
  },
]);
