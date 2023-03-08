import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { AuthCard } from "../components/authCard";

export function SignIn() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  async function handleSignInWithGoogle() {
    setAuthing(true);

    await signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(auth);
        navigate("/test");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  }

  function handleLogin() {
    console.log("Clicou");
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <AuthCard
        googleButton={() => handleSignInWithGoogle()}
        loginButton={async () => handleLogin()}
        disabled={authing}
      />
    </div>
  );
}
