import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

import Header from "./components/Header.js";
import Doc from "./components/Doc.js";
import GetDoc from "./components/GetDoc.js";
import Footer from "./components/Footer.js";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="html">
      <Header />
      {user ? <GetDoc/> : <Doc />}
      <Footer />
    </div>
  );
}

export default App;
