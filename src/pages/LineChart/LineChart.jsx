import React from "react";
import MainBoxLayout from "../../layout/mainBoxLayout";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import LineChartData from "./lineChartData";

export default function LineChartPage() {
  return (
    <MainBoxLayout>
      <Header
        title="Line Char"
        subtitle="The minimum wage in Germany, France and Spain (EUR/month)"
      ></Header>
      <Box sx={{ height: "100vh", p: 5, display: "flex",overflow:"scroll"  }}>
        <LineChartData />
      </Box>
    </MainBoxLayout>
  );
}
