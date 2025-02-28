import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

export default function MainBoxLayout({ children }) {
    const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "100%",
        overflow: "hidden",
        bgcolor: theme.palette.background.paper,
      }}
    >
      {children}
    </Box>
  );
}
