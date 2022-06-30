import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SailingIcon from "@mui/icons-material/Sailing";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";

import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Sidebar.scss";

import logo from "../../Assets/Main-logo.png";
import bookingInactive from "../../Assets/RenterImages/booking-inactive.png";
import bookingActive from "../../Assets/RenterImages/booking-active.png";
import myexperience from "../../Assets/RenterImages/my-experience.png";
import myexperienceActive from "../../Assets/RenterImages/my-experience-active.png";
import MyDocks from "../../Assets/RenterImages/my-docks.png";
import MyDocksActive from "../../Assets/RenterImages/my-docks-active.png";
import ChatIcon from "../../Assets/RenterImages/chat-icon-white.png";
import ChatIconActive from "../../Assets/RenterImages/chat-icon-white-active.png";
import CreditCard from "../../Assets/RenterImages/credit-card-white.png";
import CreditCardActive from "../../Assets/RenterImages/credit-card-white-active.png";
import logoutIcon from "../../Assets/RenterImages/logout.png";
import notify from "../../Assets/RenterImages/chat1.png";
import notify2 from "../../Assets/RenterImages/chat2.png";
import notify3 from "../../Assets/RenterImages/chat3.png";
import ProImage from "../../Assets/RenterImages/profile.png";

// import home from '../../images/home.svg';

import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import InsideFooter from "../Footer/InsideFooter/InsideFooter";
import Logout from "../Login/Logout/Logout";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core";
import { Divider } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  background: "#0C294D",
  // color: 'white',
  fontWeight: "bold",
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
    width: `calc(${theme.spacing(9)} + 1px)`,
    background: "#0C294D",
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
      borderRadius: "4px",
      border: "1px solid #000",
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  logout: {
    backgroundColor: "white",
    marginTop: theme.spacing(8),
    color: "white",
  },
}));
const Sidebar = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openTwo, setOpenTwo] = React.useState(true);

  const handleClick = () => {
    setOpenTwo(!openTwo);
  };
  const itemList = [
    {
      path: "/dashboard",
    },
    {
      path: "/bookings/boats",
    },
    {
      path: "/bookings/experiences",
    },
    {
      path: "/bookings/docks",
    },
    {
      path: "/boats",
    },
    {
      path: "/my-experiences",
    },
    {
      path: "/my-docks",
    },
    {
      path: "/payout-history",
    },
    {
      path: "/messages",
    },
  ];
  // console.log('sdajal', itemList);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* start notification dropdown  */}
      <div className="dropdown">
        <button
          className="btn bell_btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={7} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </button>
        <ul
          className="dropdown-menu notification_list_menu"
          aria-labelledby="dropdownMenuButton1"
          onClick={() => navigate("/notifications")}
        >
          <li>
            <span className="notify_inner_img">
              <img src={notify} />
            </span>
            <div className="notify_menu_text">
              <h3>Ellen Lambert</h3>
              <p>Hey! How's it going?</p>
            </div>
            <p className="notify_time">04:04AM</p>
          </li>
          <Divider />
          <li>
            <span className="notify_inner_img">
              <img src={notify2} />
            </span>
            <div className="notify_menu_text">
              <h3>Ellen Lambert</h3>
              <p>Hey! How's it going?</p>
            </div>
            <p className="notify_time">04:04AM</p>
          </li>
          <Divider />
          <li>
            <span className="notify_inner_img">
              <img src={notify3} />
            </span>
            <div className="notify_menu_text">
              <h3>Ellen Lambert</h3>
              <p>Hey! How's it going?</p>
            </div>
            <p className="notify_time">04:04AM</p>
          </li>
        </ul>
      </div>
      {/* end dropdown  */}
      {/* start new menu  */}
      <div className="dropdown owner_dropdown_menu">
        <button
          className="btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Marcus
          <span className="owner-pro-dropdown">
            <img src={ProImage} alt="profile"></img>
          </span>
        </button>
        <ul
          className="dropdown-menu profile_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <Link className="dropdown-item" to="/profile">
              <span className="profile_icons">
                <i className="fa-solid fa-user"></i>
              </span>{" "}
              Profile
            </Link>
          </li>
          <Divider />
          <li>
            <Link className="dropdown-item" to="#">
              <span className="profile_icons">
                <i className="fa-solid fa-gear"></i>
              </span>
              Settings
            </Link>
          </li>
        </ul>
      </div>
      {/* end new menue  */}
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          position="fixed"
          open={open}
          style={{ background: "#f2f2f2", color: "#000" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              TMBO
            </Typography> */}
            <Search className="db_navbar_search">
              
              <StyledInputBase className="db_top_search_input"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconWrapper className="db_search_icon">
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {/* <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1777} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}
              {/* start notification dropdown  */}
              <div className="dropdown">
                <button
                  className="btn bell_btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={7} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </button>
                <ul
                  className="dropdown-menu notification_list_menu"
                  aria-labelledby="dropdownMenuButton1"
                  onClick={() => navigate("/notifications")}
                >
                  <li>
                    <span className="notify_inner_img">
                      <img src={notify} />
                    </span>
                    <div className="notify_menu_text">
                      <h3>Ellen Lambert</h3>
                      <p>Hey! How's it going?</p>
                    </div>
                    <p className="notify_time">04:04AM</p>
                  </li>
                  <Divider />
                  <li>
                    <span className="notify_inner_img">
                      <img src={notify2} />
                    </span>
                    <div className="notify_menu_text">
                      <h3>Ellen Lambert</h3>
                      <p>Hey! How's it going?</p>
                    </div>
                    <p className="notify_time">04:04AM</p>
                  </li>
                  <Divider />
                  <li>
                    <span className="notify_inner_img">
                      <img src={notify3} />
                    </span>
                    <div className="notify_menu_text">
                      <h3>Ellen Lambert</h3>
                      <p>Hey! How's it going?</p>
                    </div>
                    <p className="notify_time">04:04AM</p>
                  </li>
                </ul>
              </div>
              {/* end dropdown  */}
              {/* start new menu  */}
              <div className="dropdown owner_dropdown_menu">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Marcus
                  <span className="owner-pro-dropdown">
                    <img src={ProImage} alt="profile"></img>
                  </span>
                </button>
                <ul
                  className="dropdown-menu profile_menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <span className="profile_icons">
                        <i className="fa-solid fa-user"></i>
                      </span>{" "}
                      Profile
                    </Link>
                  </li>
                  <Divider />
                  <li>
                    <Link className="dropdown-item" to="#">
                      <span className="profile_icons">
                        <i className="fa-solid fa-gear"></i>
                      </span>
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
              {/* end new menue  */}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}

        <div className="sidebar-main">
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <div className="drawer-img">
                    <img src={logo} alt="" />
                    <ChevronLeftIcon />
                  </div>
                )}
              </IconButton>
            </DrawerHeader>
            {/* <Divider /> */}
            <List className="nav-wrapper-sidebar">
              <ListItemButton
                className={
                  location.pathname === itemList[0].path ? "li-sidebar" : null
                }
                onClick={() => navigate("/dashboard")}
              >
                <ListItemIcon>
                  {/* <img src={home} alt='' style={{ color: '#fff' }} /> */}
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              {/* nested */}
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <span>
                    <img src={bookingInactive} />
                  </span>
                </ListItemIcon>
                <ListItemText primary="Bookings" />
                {openTwo ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={openTwo}
                timeout="auto"
                unmountOnExit
                // className={
                //   location.pathname === itemList[1].path
                //     ? 'li-nested-sidebar'
                //     : null
                // }
              >
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/bookings/boats")}
                    className={
                      location.pathname === itemList[1].path
                        ? "li-sidebar"
                        : null
                    }
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <span className="my_experience_inactive">
                        <img src={bookingActive} />
                      </span>
                      <span className="my_experience_active">
                        <img src={bookingInactive} />
                      </span>
                    </ListItemIcon>
                    <ListItemText
                      className="booking_submenu_item"
                      primary="Boats"
                    />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton
                    className={
                      location.pathname === itemList[2].path
                        ? "li-sidebar"
                        : null
                    }
                    onClick={() => navigate("/bookings/experiences")}
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <span className="my_experience_inactive">
                        <img src={myexperienceActive} />
                      </span>
                      <span className="my_experience_active">
                        <img src={MyDocks} />
                      </span>
                    </ListItemIcon>
                    <ListItemText
                      className="booking_submenu_item"
                      primary="Experiences"
                    />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton
                    className={
                      location.pathname === itemList[3].path
                        ? "li-sidebar"
                        : null
                    }
                    onClick={() => navigate("/bookings/docks")}
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <span className="my_experience_inactive">
                        <img src={MyDocksActive} />
                      </span>
                      <span className="my_experience_active">
                        <img src={MyDocks} />
                      </span>
                    </ListItemIcon>
                    <ListItemText
                      className="booking_submenu_item"
                      primary="Docks"
                    />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton
                className={
                  location.pathname === itemList[4].path ? "li-sidebar" : null
                }
                onClick={() => navigate("/boats")}
              >
                <ListItemIcon>
                  {/* <DirectionsBoatIcon /> */}
                  <span>
                    <img src={bookingInactive} />
                  </span>
                </ListItemIcon>
                <ListItemText primary="My Boats" />
              </ListItemButton>

              <ListItemButton
                className={
                  location.pathname === itemList[5].path ? "li-sidebar" : null
                }
                // className="li-sidebar"
                onClick={() => navigate("/my-experiences")}
              >
                <ListItemIcon>
                  {/* <SailingIcon /> */}
                  <span>
                    <img src={myexperience} />
                  </span>
                </ListItemIcon>
                <ListItemText primary="My Experiences" />
              </ListItemButton>

              <ListItemButton
                className={
                  location.pathname === itemList[6].path ? "li-sidebar" : null
                }
                // className="li-sidebar"
                onClick={() => navigate("/my-docks")}
              >
                <ListItemIcon>
                  {/* <DirectionsBoatIcon /> */}
                  <span>
                    <img src={MyDocks} />
                  </span>
                </ListItemIcon>
                <ListItemText primary="My Docks" />
              </ListItemButton>

              {/* <ListItemButton
              className={
                location.pathname === itemList[6].path ? "li-sidebar" : null
              }
           
              onClick={() => navigate("/my-docks")}
            >
              <ListItemIcon>
                <DirectionsBoatIcon />
              </ListItemIcon>
              <ListItemText primary="My Docks" />
            </ListItemButton> */}
              {/* Messages side Link start  */}
              <ListItemButton
                className={
                  location.pathname === itemList[8].path ? "li-sidebar" : null
                }
                // className="li-sidebar"
                onClick={() => navigate("/messages")}
              >
                <ListItemIcon>
                  {/* <DirectionsBoatIcon /> */}
                  <span className="my_experience_inactive">
                    <img src={ChatIcon} />
                  </span>
                  <span className="my_experience_active">
                    <img src={ChatIconActive} />
                  </span>
                </ListItemIcon>
                <ListItemText primary="Messages" />
              </ListItemButton>
              {/* end  */}

              <ListItemButton
                className={
                  location.pathname === itemList[7].path ? "li-sidebar" : null
                }
                // className="li-sidebar"
                onClick={() => navigate("/payout-history")}
              >
                <ListItemIcon>
                  {/* <DirectionsBoatIcon /> */}
                  <span className="my_experience_inactive">
                    <img src={CreditCard} />
                  </span>
                  <span className="my_experience_active">
                    <img src={CreditCardActive} />
                  </span>
                </ListItemIcon>
                <ListItemText primary="Payout History" />
              </ListItemButton>
              {/* <br></br>
            <br></br> */}
              <ListItemButton className="logout_item">
                <span>
                  <img src={logoutIcon} />
                </span>
                {/* <ListItemButton> */}
                {/* <ExitToAppIcon /> */}
                {/* </ListItemButton> */}
                <Logout />
              </ListItemButton>
            </List>
            {/* <List>
          {itemsList.map((item, index) => {
            console.log('sal', item);
            const { text, icon, path } = item;
            return (
              <>
                <ListItem
                  button
                  key={text}
                  onClick={() => navigate(path)}
                  className={location.pathname === path ? 'li-sidebar' : null}
                >
                  {icon && (
                    <ListItemIcon style={{ color: '#fff' }}>
                      {icon}
                    </ListItemIcon>
                  )}
                  <ListItemText primary={text} />
                </ListItem>
              </>
            );
          })}
        </List> */}
          </Drawer>
        </div>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
      <InsideFooter />
    </>
  );
};

export default Sidebar;
