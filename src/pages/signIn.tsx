import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  async function handleSignInWithGoogle() {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(auth);
        navigate("/test");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <GoogleButton
        type="dark"
        onClick={() => handleSignInWithGoogle()}
        disabled={authing}
      />
    </div>
  );
}
