import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { rows } from "./data";
import Header from "../../components/Header";
import MainBoxLayout from "../../layout/mainBoxLayout";

export default function Team() {
  const theme = useTheme();
  const getAccessIcon = (access) => {
    switch (access) {
      case 'Admin':
        return <AdminPanelSettingsOutlined sx={{ color: '#fff' }} fontSize="small" />;
      case 'Manager':
        return <SecurityOutlined sx={{ color: '#fff' }} fontSize="small" />;
      case 'User':
        return <LockOpenOutlined sx={{ color: '#fff' }} fontSize="small" />;
      default:
        return null; 
    }
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      headerAlign: "center",
      display: "flex",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              mx: "auto",
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {getAccessIcon(access)}
            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <>
<MainBoxLayout>
    <Header title="Team" subtitle="Managing the Team Members" />
        <DataGrid
          sx={{ height: "100%", m: 3}}
          rows={rows}
          columns={columns}
          
        />
  </MainBoxLayout>
    </>
  );
}
