import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearColor() {
  return (
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={0.1}>
      <LinearProgress color="primary" />
      <LinearProgress color="primary" />
      <LinearProgress color="primary" />
    </Stack>
  );
}
