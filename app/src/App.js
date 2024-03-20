import "./App.css";
import MyRouter from "./MyRouter.js";

import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <div>
      <Header />
      <MyRouter />
      <Footer />
    </div>
  );
}

export default App;
