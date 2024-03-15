import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import DocList from "./components/DocList.js";
import AddDoc from "./components/AddDoc.js";

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
      {/* {user ? <DocList/> : <DocList />} */}
      <Footer />
    </div>
  );
}

export default App;
