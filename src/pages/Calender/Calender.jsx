
import React, { useState } from "react";
import MainBoxLayout from "../../layout/mainBoxLayout";
import Header from "../../components/Header";
import { Box, Typography, useTheme } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core";

export default function Calendar() {
  const theme = useTheme();
  const [currentEvents, setCurrentEvents] = useState([]);
  const createEventId = () => {
    return String(Date.now());
  };

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Please enter a name for your event");
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event?`)) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    // Only update state if the events have changed
    const newEvents = events.map((event) => ({
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      allDay: event.allDay,
    }));

    // Check if the new events are different from the current events
    if (JSON.stringify(newEvents) !== JSON.stringify(currentEvents)) {
      setCurrentEvents(newEvents);
    }
  };

  return (
    <MainBoxLayout>
      <Header title="Calender" subtitle=""></Header> 
      <Box
        sx={{
          m: 3,
          display: "flex",
          overflow: "auto",
          gap: 1,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            borderRight: "2px solid gray",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            bgcolor: theme.palette.background.hover,
            borderRadius: "5px",
            maxWidth: "20%",
          }}
        >
          <Typography sx={{ p: 3, fontWeight: "bold" }} variant="h4">
            Events
          </Typography>
          {currentEvents.length === 0 ? (
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{
                  fontWeight: "semi-bold",
                  display: "flex",
                  justifyContent: "center",
                  px: 3,
                }}
              >
                No Events, Click on a date to add an event
              </Typography>
            </Box>
          ) : (
            currentEvents.map((event, index) => (
              <Box sx={{ display: "flex", gap: 1, px: 3 }} key={index}>
                <Typography
                  sx={{ fontWeight: "light", textWrap: "nowrap" }}
                >
             
                  {formatDate(event.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
                <Typography sx={{ fontWeight: "bold", textTransform: "capitalize",letterSpacing: "1px", textWrap: "wrap" }}>
                  {event.title}
                </Typography>
              </Box>
            ))
          )}
        </Box>
        <Box sx={{ flexGrow: 7, padding: "10px" }}>
          <FullCalendar
            events={currentEvents}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,dayGridWeek,dayGridDay",
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
          />
        </Box>
        
      </Box>
    </MainBoxLayout>
  );
}
