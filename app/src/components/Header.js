import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

import { auth } from "../firebase.js";

import SignIn from "./SignIn.js";
import SignOut from "./SignOut.js";

function Header() {
  // 認証済の場合、ユーザー情報を、未認証の場合、nullが入っている。
  const [user] = useAuthState(auth);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Home", user ? "editDoc" : "DocDetail", "test", "test"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                {/* メニューから選択されたメニューの文字列でページ遷移 */}
                <ListItemText primary={<Link href={`/${text}`}>{text}</Link>} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: "#2196F3" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)} // 開く
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
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)} // 閉じる
      >
        {DrawerList}
      </Drawer>
    </header>
  );
}

export default Header;
