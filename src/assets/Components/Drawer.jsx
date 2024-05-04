// @ts-nocheck
/* eslint-disable react/prop-types */
import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { grey } from '@mui/material/colors';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Avatar, Stack, Tooltip } from "@mui/material";
import {
    ContactsOutlined,
  DarkModeOutlined,
  HomeOutlined,
  LightModeOutlined,
  NotificationsNoneOutlined,
  PeopleAltOutlined,
  Person2Outlined,
  ReceiptOutlined,
  SettingsOutlined,
  PersonOutlined,
  CalendarTodayOutlined,
  HelpOutlineOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MapOutlined,
} from "@mui/icons-material";
import { Outlet, useNavigate ,useLocation } from "react-router-dom";


const drawerWidth = 240;

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

 const array1=[
    {
        id:1,
        title :"Dashboard",
        icon:<HomeOutlined/>,
        path:"/"
    },
    {
        id:2,
        title :"Manage Team",
        icon:<PeopleAltOutlined/>,
        path:"/team"
    },
    {
        id:3,
        title :"Contacts Information",
        icon:<ContactsOutlined/>,
        path:"/contacts"
    },
    {
        id:4,
        title :"Invoice Balances",
        icon:<ReceiptOutlined/>,
        path:"/invoice"
    },
]
const array2 = [
    {  id:1,title: "Profile Form", icon: <PersonOutlined />, path: "/form" },
    {  id:2,title: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
    { id:3,
      title: "FAQ Page",
      icon: <HelpOutlineOutlined />,
      path: "/faq",
    },
  ];
  
  const array3 = [
    {  id:1,title: "Bar Chart", icon: <BarChartOutlined />, path: "/BarChart" },
    {  id:2,title: "Pie Chart", icon: <PieChartOutlineOutlined />, path: "/PieChart" },
    {  id:3,title: "Line Chart", icon: <TimelineOutlined />, path: "/LineChart" },
    {  id:4,title: "Geography Chart", icon: <MapOutlined />, path: "/GeographyChart" },
  ];
export default function MiniDrawer({ setMode }) {
  let location = useLocation();

    const navigate=useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
// Search
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
   
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      
      [theme.breakpoints.up("md")]: {
        width: "20ch",
       
      },
    },
  }));

  //   end Search
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Stack
            
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ width: "100%" }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={() => {
                    localStorage.setItem("currentMOde",theme.palette.mode ==="dark"?"light":"dark")
                    setMode((prevMode) =>
                      prevMode === "light" ? "dark" : "light"
                    );
                  }}
                  color="inherit"
                >
                  <LightModeOutlined />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    localStorage.setItem("currentMOde",theme.palette.mode ==="light"?"dark":"light")
                    setMode((prevMode) =>
                      prevMode === "light" ? "dark" : "light"
                    );
                  }}
                  color="inherit"
                >
                  <DarkModeOutlined />
                </IconButton>
              )}
  <IconButton color="inherit">
                <NotificationsNoneOutlined />
              </IconButton>
                  <IconButton color="inherit">
                <SettingsOutlined />
              </IconButton>
              <IconButton color="inherit">
                <Person2Outlined />
              </IconButton>

            
          
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

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

        <Avatar sx={{mx:"auto", width: open?88 :50,my:1,height: open?88 :50 ,border:"2px solid grey",transition:"0.3s"}} alt="Ayman Ibarim" src="https://h.top4top.io/p_30349pjhe1.jpg" />
            <Typography sx={{fontSize: open?17 :0 ,transition:"0.3s"}} align="center"  variant="body1" >Ayamn Ibarhim</Typography>
            <Typography sx={{fontSize: open?15 :0 ,transition:"0.3s" ,color:theme.palette.info.main ,fontWeight:"bold",my:1}} align="center" variant="body1" >Admin</Typography>

        <Divider />

        <List>
            {array1.map((item) => {
              return(
                <Tooltip  key={item.id} title={open ? null: item.title} placement="left" >

                
                <ListItem onClick={()=>{navigate(item.path)}} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:location.pathname===item.path ? theme.palette.mode==="dark"? grey[800]:grey[300] :null
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
    
            
              </ListItem>
              </Tooltip>
              )
            }
            )}
       

        </List>

        <Divider />
        <List>
        {array2.map((item) => {
              return(
                <Tooltip  key={item.id} title={open ? null: item.title} placement="left" >

                <ListItem onClick={()=>{navigate(item.path)}} key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:location.pathname===item.path ? theme.palette.mode==="dark"? grey[800]:grey[300] :null
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
    
            
              </ListItem>
              </Tooltip>
              )
            }
            )}
        </List>

        <Divider />
        <List>
        {array3.map((item) => {
              return(
                <Tooltip  key={item.id} title={open ? null: item.title} placement="left" >

                <ListItem onClick={()=>{navigate(item.path)}} key={item.id} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:location.pathname===item.path ? theme.palette.mode==="dark"? grey[800]:grey[300] :null
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
    
            
              </ListItem>
              </Tooltip>
              )
            }
            )}
        </List>


      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
        <Outlet/>

      </Box>
    </Box>
  );
}
