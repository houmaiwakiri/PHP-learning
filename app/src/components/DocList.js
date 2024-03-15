import React, { useState, useEffect } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

import { db } from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function DocList() {
  const [classLists, setclassLists] = useState([]);

  useEffect(() => {
    const classData = collection(db, "classLists");
    // DBから値取得
    getDocs(classData).then((snapshot) => {
      setclassLists(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });
    // リアルタイムで取得
    onSnapshot(classData, (post) => {
      setclassLists(post.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
    fontWeight: "bold",
    fontSize: "1.2rem",
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {classLists.map((classList) => (
            <Grid item xs={2} sm={4} md={4} key={classList.name}>
              <Item>{classList.name}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default DocList;
