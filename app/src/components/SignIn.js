import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "@mui/material";

import { auth } from "../firebase.js";

function SignIn() {
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      // result.userは、Googleの認証成功後のユーザー情報を含む
      .then((result) => {
        console.log(result.user.email + "ログイン成功");
      })
      .catch((error) => {
        // エラーが発生した場合の処理
        console.error(error);
      });
  }

  return (
    <div>
      <Button onClick={signInWithGoogle}>ログイン</Button>
    </div>
  );
}

export default SignIn;
