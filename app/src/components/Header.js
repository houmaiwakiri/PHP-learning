import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { auth } from "../firebase.js";

import SignIn from "./SignIn.js";
import SignOut from "./SignOut.js";

function Header() {
  // 認証済の場合、ユーザー情報を、未認証の場合、nullが入っている。
  const [user] = useAuthState(auth);
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PHP-LEARNING-DOC
            </Typography>
            {user ? <SignOut /> : <SignIn />}
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default Header;
