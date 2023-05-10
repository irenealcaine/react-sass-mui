import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Irene</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonIcon />
            <span>Users</span>
          </li>
          <li>
            <Inventory2OutlinedIcon />
            <span>Products</span>
          </li>
          <li>
            <InventoryOutlinedIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon />
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsOutlinedIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon />
            <span>Notifications</span>
          </li>
          <li>
            <FavoriteOutlinedIcon />
            <span>System health</span>
          </li>
          <li>
            <LoginOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon />
            <span>Settings</span>
          </li>
          <li>
            <AccountBoxIcon />
            <span>Pofile</span>
          </li>
          <li>
            <LogoutOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
