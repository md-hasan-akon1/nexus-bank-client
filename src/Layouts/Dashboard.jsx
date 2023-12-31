import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SavingsIcon from "@mui/icons-material/Savings";
import AddCardIcon from "@mui/icons-material/AddCard";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ConstructionIcon from "@mui/icons-material/Construction";
import { Link, Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "../config/ThemeConfig";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useConstant } from "@react-spring/shared";
import { AuthContext } from "../providers/AuthProvider";
import { BiTransfer } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlineTransaction } from "react-icons/ai";
import useDesignation from "../Hooks/useDesignation";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { FcDebt } from "react-icons/fc";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import PaidIcon from "@mui/icons-material/Paid";
import { PiPasswordFill } from "react-icons/pi";
import { useScroll } from "framer-motion";
import { MdAccountTree, MdRateReview } from "react-icons/md";
import LogoutIcon from '@mui/icons-material/Logout';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaymentIcon from '@mui/icons-material/Payment';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import { FaHistory } from "react-icons/fa";

const drawerWidth = 300;

// routes
const userMenu = [
  {
    name: "Internet Banking Dashboard",
    icon: <AiOutlineDashboard />,
    route: "account-overview",
  },
  {
    name: "Open An Account",
    icon: <FileOpenIcon />,
    route: "open-account",
  },
  {
    name: "Apply Loan",
    icon: <CreditScoreIcon />,
    route: "apply-loan",
  },
  {
    name: "Fund Transfer",
    icon: <CreditScoreIcon />,
    route: "Fund-transfer",
  },
  {
    name: "topup-beneficiary-list",
    icon: <CreditScoreIcon />,
    route: "topup-beneficiary-list",
  },
  {
    name: "Card Beneficiary List",
    icon: <CreditScoreIcon />,
    route: "card-beneficiary-list",
  },
  {
    name: "Fund Transfer Beneficiary List",
    icon: <CreditScoreIcon />,
    route: "FundTransferBeneficiaryList",
  },
  {
    name: "Mobil Top-Up History",
    icon: <CreditScoreIcon />,
    route: "MobilTopUpHistory",
  },
  {
    name: "Add Beneficiary",
    icon: <CreditScoreIcon />,
    route: "AddBeneficiary",
  },
  {
    name: "Savings",
    icon: <SavingsIcon />,
    route: "savings",
  },
  {
    name: "Add Money",
    icon: <AddCardIcon />,
    route: "add-money",
  },
  {
    name: "Transfer Money",
    icon: <BiTransfer />,
    route: "transfer-money",
  },

  {
    name: "Transaction History",
    icon: <AiOutlineTransaction />,
    route: "transaction-history",
  },
  {
    name: "E-Statement",
    icon: <AiOutlineTransaction />,
    route: "e-statement",
  },
  {
    name: "Bkash Payment Pin Verification",
    icon: <AiOutlineTransaction />,
    route: "verify-pin",
  },
];

// admin menu
const adminMenu = [
  // {
  //   name: "Dashboard",
  //   icon: <DashboardIcon />,
  //   route: "adminDashboard",
  // },
  {
    name: "Analytics",
    icon: <PeopleAltIcon />,
    route: "analytics",
  },
  {
    name: "Employees",
    icon: <PeopleIcon />,
    route: "employees",
  },
  {
    name: "Accounts",
    icon: <AccountTreeIcon />,
    route: "accounts",
  },
  {
    name: "Account Requests",
    icon: <AccountBalanceWalletIcon />,
    route: "account-request",
  },
  {
    name: "Users",
    icon: <PeopleAltIcon />,
    route: "users",
  },

  {
    name: "Loan Request",
    icon: <FcDebt></FcDebt>,
    route: "loan-request",
  },
  {
    name: "Customers Support",
    icon: <FcDebt></FcDebt>,
    route: "/admin/customer-support",
    name: "Add A Career",
  },
  {
    icon: <FcDebt></FcDebt>,
    route: "addacareer",
  },
];

const HomeMenu = [
  {
    name: "Home",
    icon: <HomeIcon />,
    route: "/",
  },
  {
    name: "Retail Loan",
    icon: <ConstructionIcon />,
    route: "/retail-loan",
  },
  {
    name: "Contact",
    icon: <InfoIcon />,
    route: "/contact",
  },
];

// find user rote ------------------------------------------

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
    backgroundColor: "#000",
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
    backgroundColor: "#000",
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const { user, logout } = React.useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleLogout = () => {
    // console.log("User logged out");
    logout(user);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { designation } = useDesignation();

  return (
    <Box data-testid="dashboard-test" sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        {" "}
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <div className="flex items-center mr-auto">
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
              <Typography variant="h6" noWrap component="div">
                Nexus Bank Limited
              </Typography>
            </div>
            <div className="mr-4 flex gap-2 items-center">
              <div className="hidden  md:flex flex-col justify-center items-end">
                <h3 className="text-xs">
                  Welcome{" "}
                  <span className="font-semibold text-[18px]">
                    {user?.username}
                  </span>
                </h3>
                {designation ? <p> {designation}</p> : <p>Regular User</p>}
              </div>
              <img
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user?.profile_image}
                alt=""
              />
              {isModalOpen && (
                <div className="absolute shadow-lg top-14 right-8 bg-white p-6 rounded-md ">
                  <ul className="space-y-3 font-semibold">
                    <li>
                      <Link
                        to="my-profile"
                        onClick={() => setIsModalOpen(!isModalOpen)}
                      >
                        {" "}
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="edit-profile"
                        onClick={() => setIsModalOpen(!isModalOpen)}
                      >
                        Edit Profile
                      </Link>
                    </li>
                    <li
                      className="cursor-pointer"
                      onClick={() => {
                        setIsModalOpen(!isModalOpen);
                        handleLogout();
                      }}
                    >
                      Log Out
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <ThemeProvider theme={lightTheme}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader className="text-xl font-semibold">
            <h2>Nexus Bank Ltd</h2>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {open === true && (
            <div className="flex flex-col items-center justify-center my-6 ">
              <img
                className="w-20 h-20 rounded-full"
                src={user?.profile_image}
                alt=""
              />
              <h2 className=" mt-4 font-semibold">{user?.username}</h2>
              <p>{user?.status}</p>
            </div>
          )}
          <List>
            {
              // todo :

              // userMenu.map((menuItem, index) => (
              <ListItem
                key={"My Profile"}
                disablePadding
                sx={{ display: "block" }}
              >
                {/* Account Details------------------------- */}
                <div>
                  {!open ? (
                    <div className="flex items-center justify-center">
                      <FileOpenIcon className="opacity-60 " />
                    </div>
                  ) : (
                    <h4 className="ml-5 font-semibold my-3">Dashboard</h4>
                  )}
                  <div className={`${open && "ml-3"}`}>
                    <Link to={"account-overview"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<AiOutlineDashboard />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Internet Banking Dashboard"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                  </div>
                </div>
                {/* account Information  */}
                <div>
                  {!open ? (
                    <div className="flex items-center justify-center">
                      <FileOpenIcon className="opacity-60 " />
                    </div>
                  ) : (
                    <h4 className="ml-5 font-semibold my-3">
                      Account Information
                    </h4>
                  )}
                  <div className={`${open && "ml-3"}`}>
                    <Link to={"my-accounts"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<MdAccountTree />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"My Accounts"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                    {/* e-statement */}
                    {/* <Link to={"e-statement"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<MdAccountTree />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"E-Statement"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link> */}
                  </div>
                </div>

                {/* Account Details------------------------- */}
                <div>
                  {!open ? (
                    <div className="flex items-center justify-center">
                      <FileOpenIcon className="opacity-60 " />
                    </div>
                  ) : (
                    <h4 className="ml-5 font-semibold my-3">Open Accounts</h4>
                  )}
                  <div className={`${open && "ml-3"}`}>
                    <Link to={"/current-account"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<AccountBalanceWalletIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Current Account"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link to={"saving-account"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<EnergySavingsLeafOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Saving Account"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link to={"/deposit-account"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<SavingsIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Deposit Account"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link to={"/student-account"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<StickyNote2OutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Student Account"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link to={"credit-card-apply"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<AddCardIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Apply For Credit Card"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                  </div>
                </div>

                {/* Transfer............................... */}
                <div>
                  {!open ? (
                    <div className="flex items-center justify-center">
                      <PaidIcon className="opacity-60" />
                    </div>
                  ) : (
                    <h4 className="font-semibold ml-5 my-2">Transfer</h4>
                  )}
                  <div className={`${open && "ml-3"}`}>
                    <Link to={"Fund-transfer"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<AccountBalanceWalletOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Make a transfer"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link to={"transaction-history"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<FaHistory/>}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Transaction history"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link to={"FundTransferBeneficiaryList"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<FeaturedPlayListIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Transfer Beneficiary List"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>

                    {/* <Link to={"AddBeneficiary"} >
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                            }}
                          >
                            {<AiOutlineTransaction/>}
                          </ListItemIcon>
                          <ListItemText
                            primary={"Add Beneficiary"}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </Link> */}
                  </div>
                </div>

                {/* Loan Services------------------------- */}
                {/* <div>
                  {!open ? (
                    <div className="flex items-center justify-center">
                      <PaidIcon className="opacity-60" />
                    </div>
                  ) : (
                    <h4 className="font-semibold ml-5 my-2">Loan Services</h4>
                  )}
                  <div className={`${open && "ml-3"}`}>
                    <Link to={"apply-loan"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<AccountBalanceWalletOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Apply Loan"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                  </div>
                </div> */}

                {/* Card Services---------------------- */}
               
                {/* TopUp overview------------------------- */}
                {/* <div>
                  {!open ? (
                    <div className="flex items-center justify-center">
                      <FileOpenIcon className="opacity-60 " />
                    </div>
                  ) : (
                    <h4 className="ml-5 font-semibold my-3">Topup service</h4>
                  )}
                  <div className={`${open && "ml-3"}`}>
                    <Link to={"MobilTopUpHistory"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<AiOutlineTransaction />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Mobile Top-Up History"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                  </div>
                </div> */}
                {/* other transfer------------------------- */}
                <div>
                  {!open ? (
                    <div className="flex items-center justify-center">
                      <FileOpenIcon className="opacity-60 " />
                    </div>
                  ) : (
                    <h4 className="ml-5 font-semibold my-3">Other Transefer</h4>
                  )}
                  <div className={`${open && "ml-3"}`}>
                    <Link to={"sslcommerz-fund-transfer"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<PaymentsIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"sslcommerz Fund Transfer"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link to={"add-money"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<PaymentIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Stripe Fund Transfer"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                  </div>
                </div>

                {/* Profile overview------------------------- */}
                <div>
                  {!open ? (
                    <div className="flex items-center justify-center">
                      <FileOpenIcon className="opacity-60 " />
                    </div>
                  ) : (
                    <h4 className="ml-5 font-semibold my-3">
                      Profile Management
                    </h4>
                  )}
                  <div className={`${open && "ml-3"}`}>
                    <Link to={"/"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<HomeIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Home"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link to={"my-profile"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<AccountCircleIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"My Profile"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link to={"change-password"}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<PiPasswordFill />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Change Password"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                    <Link to={"user-feedback"} >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<MdRateReview />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Users Feedback"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </Link>
                  </div>
                </div>
              </ListItem>
            }
          </List>

          <Divider />
          <List>
             <div   onClick={() => handleLogout()} className="mb-10"> 
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {<LogoutIcon />}
                        </ListItemIcon>
                        <ListItemText
                          primary={"Logout"}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </div>
           
          </List>
        </Drawer>
      </ThemeProvider>
      <Box
        className="bg-[rgb(241,245,249)] min-h-screen"
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
