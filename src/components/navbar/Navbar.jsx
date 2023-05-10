import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import BorderInnerOutlinedIcon from "@mui/icons-material/BorderInnerOutlined";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <PublicIcon />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon />
          </div>
          <div className="item">
            <BorderInnerOutlinedIcon />
          </div>
          <div className="item">
            <CircleNotificationsOutlinedIcon />
          </div>
          <div className="item">
            <ChatOutlinedIcon />
          </div>
          <div className="item">
            <ChecklistRtlOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
