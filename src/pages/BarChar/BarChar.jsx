import React from "react";
import MainBoxLayout from "../../layout/mainBoxLayout";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import BarData from "./barData";

export default function BarChar() {
  return (
    <MainBoxLayout>
      <Header
        title="Bar Char"
        subtitle="The minimum wage in Germany, France and Spain (EUR/month)"
      ></Header>

      <Box
        sx={{
          height: "100vh",
          pl: 5,
          pt: 5,
          display: "flex",
           overflow:"scroll"
        }}
      >
        <BarData />
      </Box>
    </MainBoxLayout>
  );
}
