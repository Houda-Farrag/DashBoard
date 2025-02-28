import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Avatar, styled, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { drawerWidth } from "../layout/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import useTheme from "@mui/material/styles/useTheme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));
export default function SideBar({
  open = false,
  handleDrawerClose = () => {},
  theme = {},
}) {
  const navigate = useNavigate();
  const arraySec1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlineOutlinedIcon />, path: "/team" },
    { text: "contact Info", icon: <ContactsOutlinedIcon />, path: "/info" },
    { text: "Invoices Balance", icon: <ReceiptIcon />, path: "/recipt" },
  ];
  const arraySec2 = [
    { text: "profile", icon: <PermIdentityIcon />, path: "/profile" },
    { text: "calender", icon: <CalendarTodayIcon />, path: "/calender" },
    { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
  ];
  const arraySec3 = [
    { text: "Bar chart", icon: <BarChartOutlinedIcon />, path: "/barchart" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/piechart", },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/linechart" },
  ];
  const { pathname } = useLocation();
  const themeL = useTheme();

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Avatar
          sx={{
            width: open ? 88 : 56,
            height: open ? 88 : 56,
            my: 3,
            mx: "auto",
            border: "2px solid grey",
            transition: "0.30s",
          }}
          alt="Travis Howard"
          src="https://imgs.search.brave.com/cwGZYSdfLmxokuVmPjLrPOaWt8ENnsI9ElT6Vv_BbnY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzMxLzM3Lzg5/LzM2MF9GXzUzMTM3/ODkzOF94d1JqTjll/NXJhbWRQajJjb0R3/SHJ3azlRSGNrVmE1/WS5qcGc"
        />
        <Typography
          sx={{ transition: "0.30s" }}
          textAlign={"center"}
          fontSize={open ? "1.4rem" : "0rem"}
          textTransform={"capitalize"}
        >
          Mahmoud Mohammed
        </Typography>
        <Typography
          sx={{ transition: "0.30s" }}
          textAlign={"center"}
          color={themeL.palette.primary.main}
          textTransform={"capitalize"}
          fontSize={open ? "1.3rem" : "0rem"}
          marginBlock={open ? "10px" : "0"}
        >
          admin
        </Typography>
        <Divider />
        <List>
          {arraySec1.map((text) => (
            <ListItem
              key={text.path}
              disablePadding
              sx={{ display: "block", transition: "0.30s" }}
            >
              <ListItemButton
                onClick={() => {
                  navigate(`${text.path}`);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    backgroundColor: pathname === text.path ? themeL.palette.primary.main : "transparent" ,
                    ":hover": {
                      backgroundColor: themeL.palette.primary.hover,
                    }
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                      transition: "0.30s",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                          textTransform: "capitalize",
                          transition: "0.30s",
                        }
                      : {
                          opacity: 0,
                          transition: "0.30s",
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {arraySec2.map((text, index) => (
            <ListItem key={text.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(`${text.path}`);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    backgroundColor: pathname === text.path ? themeL.palette.primary.main : "transparent" ,
                    ":hover": {
                      backgroundColor: themeL.palette.primary.hover,
                    }
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                          textTransform: "capitalize",
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {arraySec3.map((text, index) => (
            <ListItem key={text.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  navigate(`${text.path}`);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    backgroundColor: pathname === text.path ? themeL.palette.primary.main : "transparent" ,
                    ":hover": {
                      backgroundColor: themeL.palette.primary.hover,
                      color: themeL.palette.text.hover
                    }
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                          textTransform: "capitalize",
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
