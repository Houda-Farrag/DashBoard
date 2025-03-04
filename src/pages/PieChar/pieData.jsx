import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieData() {
  const data = [
    {
      id: "React",
      label: "React",
      value: 272,
      color: "hsl(107, 70%, 50%)",
    },
    {
      id: "stylus",
      label: "stylus",
      value: 543,
      color: "hsl(64, 70%, 50%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 401,
      color: "hsl(41, 70%, 50%)",
    },
    {
      id: "haskell",
      label: "haskell",
      value: 434,
      color: "hsl(172, 70%, 50%)",
    },
    {
      id: "nue",
      label: "nue",
      value: 333,
      color: "hsl(219, 70%, 50%)",
    },
  ];

  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  const normalizedData = data.map((item) => ({
    ...item,
    value: Number.parseFloat(((item.value / totalValue) * 100).toFixed(2), )
  }));

  const valueFormatter = (item) => `${item.value}%`;

  return (
    <PieChart
    //   width={700}
      height={700}
      series={[
        {
          data: normalizedData,
          innerRadius: 170,
          arcLabel: (params) => params.label ?? "",
          arcLabelMinAngle: 20,
          valueFormatter,
        },
      ]}
    />
  );
}