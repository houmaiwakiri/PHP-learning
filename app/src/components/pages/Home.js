import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.js";

import DocList from "../../components/DocList.js";
import AddDoc from "../../components/AddDoc.js";

function Home() {
  const [user] = useAuthState(auth);
  return (
    <div className="html">
      <DocList user={user} />
      {user && <AddDoc />}
    </div>
  );
}

export default Home;
