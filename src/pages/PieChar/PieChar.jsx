import React from "react";
import MainBoxLayout from "../../layout/mainBoxLayout";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import PieData from "./pieData";

export default function PieChar() {
  return (
    <MainBoxLayout>
      <Header
        title="Pie Char"
        subtitle="Simple Pie Chart"
      ></Header>

      <Box
        sx={{
          height: "100vh",
          p: 5,
          display: "flex",
          overflow:"scroll"
        }}
      >
        <PieData />
      </Box>
    </MainBoxLayout>
  );
}
