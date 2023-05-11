import "./featured.scss";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <span className="top">
        <h1 className="title">Total revenue</h1>
        <DragIndicatorIcon fontSize="small" />
      </span>
      <span className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">420 €</p>
        <p className="desc">Only last month</p>
      </span>
    </div>
  );
};

export default Featured;
