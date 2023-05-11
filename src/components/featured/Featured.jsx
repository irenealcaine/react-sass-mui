import "./featured.scss";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Featured = () => {
  return (
    <div className="featured">
      <span className="top">
        <h1 className="title">Total revenue</h1>
        <DragIndicatorIcon fontSize="small" />
      </span>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">420 €</p>
        <p className="desc">
          Previous transactions processing. Lasta payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <ArrowDropDownIcon fontSize={"small"} />
              <div className="resultAmount">12.4k €</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <ArrowDropDownIcon fontSize={"small"} />
              <div className="resultAmount">12.4k €</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult">
              <ArrowDropDownIcon fontSize={"small"} />
              <div className="resultAmount">12.4k €</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
