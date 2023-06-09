import React, { useContext } from "react";
import "./navbar.scss";
// import SearchIcon from "@mui/icons-material/Search";
// import PublicIcon from "@mui/icons-material/Public";
// import BorderInnerOutlinedIcon from "@mui/icons-material/BorderInnerOutlined";
// import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
// import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
// import ChecklistRtlOutlinedIcon from "@mui/icons-material/ChecklistRtlOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div> */}
        <div className="items">
          <div className="item">
            {/* <PublicIcon className="icon" />
            English */}
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              style={{ cursor: "pointer" }}
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          {/* <div className="item">
            <BorderInnerOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <CircleNotificationsOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChecklistRtlOutlinedIcon className="icon" />
          </div> */}
          <Link to="/users/test" className="item">
            <img
              src="https://thumbs.dreamstime.com/b/perfil-del-avatar-de-la-mujer-joven-y-elegante-81932605.jpg"
              alt="avatar"
              className="avatar"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
