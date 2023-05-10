import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 80;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users...",
        icon: (
          <AccountCircleOutlinedIcon
            className="icon"
            style={{ color: "red" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders...",
        icon: <AccountCircleOutlinedIcon className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View all orders...",
        icon: <AccountCircleOutlinedIcon className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCES",
        isMoney: true,
        link: "View all orders...",
        icon: <AccountCircleOutlinedIcon className="icon" />,
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
