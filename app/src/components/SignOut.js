import React from "react";
import Button from "@mui/material/Button";
import { auth } from "../firebase.js";

function SignOut() {
  const handleSignOut = () => {
    const isConfirmed = window.confirm("サインアウトしますか？");
    if (isConfirmed) {
      auth
        .signOut()
        .then(() => {
          alert("サインアウトしました");
        })
        .catch((error) => {
          console.error("サインアウト中にエラーが発生しました:", error);
        });
    }
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
