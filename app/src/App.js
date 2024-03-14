import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

import Header from "./components/Header.js";
import Doc from "./components/Doc.js";
import SignOut from "./components/SignOut.js";
import Footer from "./components/Footer.js";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="html">
      <Header />
      {user ? <SignOut /> : <Doc />}
      <Footer />
    </div>
  );
}

export default App;
