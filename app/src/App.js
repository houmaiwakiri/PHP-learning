import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";
import { auth } from "./firebase.js";
import SignIn from "./components/SignIn.js";
import Doc from "./components/Doc.js";
import SignOut from "./components/SignOut.js";

function App() {
  // 認証済の場合、ユーザー情報を、未認証の場合、nullが入っている。
  const [user] = useAuthState(auth);
  return (
    <div>
      <Doc />
      {user ? <SignOut /> : <SignIn />}
    </div>
  );
}

export default App;
