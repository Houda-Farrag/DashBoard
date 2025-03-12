import React from "react";
import MainBoxLayout from "../../layout/mainBoxLayout";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  let faq = [
    {
      id: 1,
      title: "What is the purpose of this dashboard?",
      content:
        "This dashboard is designed to provide you with a comprehensive overview of your data, analytics, and key performance indicators (KPIs) in one centralized location. It helps you make informed decisions and track progress in real-time.",
    },
    {
      id: 2,
      title: "How do I customize the dashboard?",
      content:
        "You can customize the dashboard by adding, removing, or rearranging widgets. Click on the 'Edit Dashboard' button to enter customization mode, where you can drag and drop widgets to suit your needs.",
    },
    {
      id: 3,
      title: "Can I share my dashboard with others?",
      content:
        "Yes, you can share your dashboard with other users. Navigate to the 'Share' option in the settings menu, and you can generate a shareable link or invite users via email.",
    },
    {
      id: 4,
      title: "How do I update my profile information?",
      content:
        "To update your profile information, go to the 'Profile' section in the top-right corner of the dashboard. From there, you can edit your name, email, password, and other personal details.",
    },
    {
      id: 5,
      title: "What should I do if I forget my password?",
      content:
        "If you forget your password, click on the 'Forgot Password' link on the login page. You will receive an email with instructions to reset your password.",
    },
    {
      id: 6,
      title: "How do I add new data to the dashboard?",
      content:
        "To add new data, go to the 'Data Sources' section and connect your desired data source (e.g., Google Analytics, Excel, or a database). Once connected, the data will automatically populate your dashboard.",
    },
    {
      id: 7,
      title: "Can I export data from the dashboard?",
      content:
        "Yes, you can export data in various formats such as CSV, Excel, or PDF. Simply click on the 'Export' button in the widget or report you want to export.",
    },
    {
      id: 8,
      title: "How do I set up notifications?",
      content:
        "You can set up notifications by going to the 'Notifications' section in the settings menu. From there, you can configure alerts for specific events or thresholds.",
    },
    {
      id: 9,
      title: "What browsers are supported?",
      content:
        "The dashboard is compatible with modern browsers such as Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. For the best experience, ensure your browser is up to date.",
    },
    {
      id: 10,
      title: "How do I contact support?",
      content:
        "If you need assistance, you can contact our support team by clicking on the 'Help' button in the bottom-right corner of the dashboard or by emailing support@dashboardapp.com.",
    },
  ];
  return (
    <>
      <MainBoxLayout>
        <Header title="FAQ" subtitle="Frequently Asked Questions"></Header>
        <Box sx={{ m: 3, display: "flex", flexDirection: "column", gap: 2, overflowY:"scroll" }}>
          {faq.map((item) => (
            <Accordion key={item.id} defaultExpanded={item.id === 1} >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span">{item.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
  
        </Box>
      </MainBoxLayout>
    </>
  );
}
