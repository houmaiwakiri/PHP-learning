import React from "react";
import { Box, Link, Typography } from "@mui/material";

function Footer() {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          iwakiri
        </Link>
        {"  "}
        {new Date().getFullYear()}
      </Typography>
    );
  }
  return (
    <footer>
      <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}>
        <Copyright />
      </Box>
    </footer>
  );
}

export default Footer;
