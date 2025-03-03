import React from "react";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import MainBoxLayout from "../../layout/mainBoxLayout";
import { columns, rows } from "./data";
import { GridToolbar } from "@mui/x-data-grid";
export default function Recipt() {
  return (
    <MainBoxLayout>
      <Header title="Invoice" subtitle="List of Invoice Balance"></Header>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        slots={{ toolbar: GridToolbar }}
        sx={{ height: "100%", m: 3 }}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </MainBoxLayout>
  );
}
