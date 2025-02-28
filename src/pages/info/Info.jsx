import React from "react";
import Header from "../../components/Header";
import MainBoxLayout from "../../layout/mainBoxLayout";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns } from "./infoData";
import { rows } from "./infoData";
export default function Info() {
  return (
    <MainBoxLayout>
      <Header
        title="Contacts"
        subtitle="List of contacts for features Reference"
      ></Header>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        slots={{ toolbar: GridToolbar }}
        sx={{ height: "100%", m: 3 }}
      />
    </MainBoxLayout>
  );
}
