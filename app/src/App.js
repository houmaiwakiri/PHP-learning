import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import DocList from "./components/DocList.js";
import AddDoc from "./components/AddDoc.js";
import LinearColor from "./components/LinerColor.js";

function App() {
  const [user] = useAuthState(auth);

  function AddDocCheck() {
    if (user) {
      return <AddDoc />;
    }
  }
  return (
    <div className="html">
      <Header />
      <DocList />
      <AddDocCheck />
      <LinearColor />
      <Footer />
    </div>
  );
}

export default App;
