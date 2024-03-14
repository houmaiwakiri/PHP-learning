import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase.js";

import SignIn from "./SignIn.js";
import SignOut from "./SignOut.js";

function Header() {
  // 認証済の場合、ユーザー情報を、未認証の場合、nullが入っている。
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <SignOut /> : <SignIn />}
      <h1>PHP-LEARNING-DOC</h1>
    </div>
  );
}

export default Header;
