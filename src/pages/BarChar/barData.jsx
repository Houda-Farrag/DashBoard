
import { useTheme } from "@emotion/react";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
export default function BarData() {
  const theme = useTheme();
  const data = [
    {
      year: 2019,
      Spain: 900,
      France: 1400,
      Germany: 1700,
    },
  
    {
      year: 2020,
      Spain: 1000,
      France: 1500,
      Germany: 1800,
    },
  
    {
      year: 2021,
      Spain: 1100,
      France: 1600,
      Germany: 1900,
    },
  
    {
      year: 2022,
      Spain: 1200,
      France: 1700,
      Germany: 2000,
    },
  
    {
      year: 2023,
      Spain: 1260,
      France: 1709,
      Germany: 2080,
    },
  ];
  const seriesData = [
    {
      label: "Spain",
      data: data.map((item) => item.Spain),
    },
    {
      label: "France",
      data: data.map((item) => item.France),
    },
    {
      label: "Germany",
      data: data.map((item) => item.Germany),
    },
  ];
  return (
    <BarChart
  height={700}
      xAxis={[
        {
          scaleType: "band",
          data: data.map((item) => item.year.toString()),
        },
      ]}
      series={seriesData.map((series) => ({
        data: series.data,
        label: series.label,
      }))}
      colors={[
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.primary.dark,
      ]}

   
      leftAxis={{
        label: "EUR",
        tickFormat: (value) => `${value} EUR`,
        labelStyle: {
          color: "#fff",
          fontWeight: "bold",
        },
      }}
      bottomAxis={{
        label: "Year",
        tickFormat: (value) => `${value}`,
        tickValues: data.map((item) => item.year),
        labelStyle: {
          color: "#a3a3a3",
          fontWeight: "bold",
          marginRight: 10,
        },
      }}
    />
  );
}
