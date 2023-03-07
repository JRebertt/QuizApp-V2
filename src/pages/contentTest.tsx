import { getAuth, signOut } from "firebase/auth"

export function ContentTest() {
  const auth = getAuth()
  return(
    <div className="text-6xl flex justify-center pt-20">
      <button className="w-40 h-32 bg-rose-500 " 
      onClick={() => signOut(auth)}
      >Sair</button>
    </div>
  )

}