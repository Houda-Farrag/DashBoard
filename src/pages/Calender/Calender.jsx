import React from "react";
import MainBoxLayout from "../../layout/mainBoxLayout";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
export default function Calender() {
  return (
    <>
      <MainBoxLayout>
        <Header title="Calender" subtitle="List of Calender"></Header>
        <Box sx={{m: 3, overflow: "auto"}}>
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </Box>
      </MainBoxLayout>
    </>
  );
}
