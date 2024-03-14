import React from "react";
import Button from "@mui/material/Button";
import { auth } from "../firebase.js";

function SignOut() {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        alert("サインアウトしました。");
      })
      .catch((error) => {
        // エラーが発生した場合の処理
        console.error("サインアウト中にエラーが発生しました:", error);
      });
  };

  return (
    <div>
      <Button color="inherit" onClick={handleSignOut}>
        サインアウト
      </Button>
    </div>
  );
}

export default SignOut;
