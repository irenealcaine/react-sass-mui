import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 80;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <AccountCircleOutlinedIcon
            className="icon"
            style={{ color: "#e11d48", backgroundColor: "#e11d4866" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ListAltOutlinedIcon
            className="icon"
            style={{ color: "#ca8a04", backgroundColor: "#ca8a0466" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <AttachMoneyOutlinedIcon
            className="icon"
            style={{ color: "#16a34a", backgroundColor: "#16a34a66" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCES",
        isMoney: true,
        link: "See details",
        icon: (
          <SavingsOutlinedIcon
            className="icon"
            style={{ color: "#ea580c", backgroundColor: "#ea580c66" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {amount} {data.isMoney && "€"}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
