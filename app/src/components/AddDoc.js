// import React, { useEffect, useState } from 'react'

import { Box, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

// import { db } from '../firebase';

function AddDoc() {
  function Add() {
    console.log("addPopup");
    setDoc(doc(db, "classLists", Popup()), {
      name: SetPostData(),
    });
  }
  function Popup() {
    return "test1";
  }

  function SetPostData() {
    return "内容";
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "10vh",
      }}
    >
      <Button
        onClick={Add}
        variant="contained"
        sx={{
          background: "linear-gradient(45deg, #2196F3 30%, #1976D2 90%)",
          boxShadow: "0 3px 5px 2px rgba(33, 150, 243, .3)",
          borderRadius: 3,
          border: 0,
          color: "white",
          height: 40,
          padding: "0 60px",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 5px 15px 5px rgba(33, 150, 243, .6)",
          },
        }}
      >
        <AddCircleOutlineIcon />
      </Button>
    </Box>
  );
}

export default AddDoc;
