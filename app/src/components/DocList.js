import React, { useState, useEffect } from "react";
import { Box, Grid, Link, Paper, Popover, Typography } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

import { db } from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function DocList({user}) {
  const [classLists, setclassLists] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  useEffect(() => {
    const classData = collection(db, "classLists");
    // DBから値取得
    getDocs(classData).then((snapshot) => {
      setclassLists(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
    // リアルタイムで取得
    onSnapshot(classData, (post) => {
      setclassLists(post.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const handlePopoverOpen = (event, detail) => {
    setAnchorEl(event.currentTarget);
    setSelectedDetail(detail);
  };

  const handlePopoverClose = () => {
    // ポップバーclose時に、nullを代入しリセット
    setAnchorEl(null);
    setSelectedDetail(null);
  };

  const callEditDoc = () => {
    console.log("編集");
    return;
  };

  const callGetDocDetails = () => {
    console.log("詳細を見る");
    return;
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
    fontWeight: "bold",
    fontSize: "1.2rem",
    cursor: "pointer",
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {classLists.map((classList) => (
            <Grid item xs={2} sm={4} md={4} key={classList.id}>
              <div onClick={(e) => handlePopoverOpen(e, classList.detail)}>
                <Item>{classList.name}</Item>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box p={2}>
          <Typography>{selectedDetail}</Typography>
          <Box textAlign="right" mt={1}>
            <Link href="#" onClick={user ? callEditDoc : callGetDocDetails}>
              {user ? "編集する" : "詳細をみる"}
            </Link>
          </Box>
        </Box>
      </Popover>
    </div>
  );
}

export default DocList;
