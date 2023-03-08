import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Loader } from "./Loader";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export function AuthRoutes({ ...props }: Props) {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
      console.log(user.email);
    } else {
      console.log("nao autorizado");
      navigate("/auth");
    }
  });

  if (loading) return <Loader />;

  return <>{children}</>;
}
