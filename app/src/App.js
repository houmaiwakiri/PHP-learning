import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import DocList from "./components/DocList.js";
import AddDoc from "./components/AddDoc.js";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="html">
      <Header />
      <DocList user={user} />
      {user && <AddDoc />}
      <Footer />
    </div>
  );
}

export default App;
