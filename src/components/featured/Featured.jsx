import "./featured.scss";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  const percentage = Math.floor(Math.random() * (90 - 50) + 50);
  const amount1 = Math.floor(Math.random() * (1900 - -300) + -300);
  const amount2 = Math.floor(Math.random() * (2500 - -600) + -600);
  const amount3 = Math.floor(Math.random() * (2900 - -1600) + -1600);

  return (
    <div className="featured">
      <span className="top">
        <h1 className="title">Total revenue</h1>
        <DragIndicatorIcon fontSize="small" />
      </span>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={3}
            styles={{
              path: {
                stroke: "#6439ffee",
                transition: "all 0.5s ease",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "#6439ff22",
                transformOrigin: "center center",
              },
              text: {
                fill: "#6439ff",
              },
            }}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">{`${Math.floor(
          Math.random() * (900 - 600) + 600
        )} €`}</p>
        <p className="desc">
          Previous transactions processing. Lasta payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div
              className={`itemResult ${amount1 > 0 ? "positive" : "negative"}`}
            >
              {amount1 > 0 ? (
                <KeyboardArrowUpIcon fontSize={"small"} />
              ) : (
                <KeyboardArrowDownIcon fontSize={"small"} />
              )}
              <div className="resultAmount">{`${amount1} €`}</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last week</div>
            <div
              className={`itemResult ${amount2 > 0 ? "positive" : "negative"}`}
            >
              {amount2 > 0 ? (
                <KeyboardArrowUpIcon fontSize={"small"} />
              ) : (
                <KeyboardArrowDownIcon fontSize={"small"} />
              )}
              <div className="resultAmount">{`${amount2} €`}</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last month</div>
            <div
              className={`itemResult ${amount3 > 0 ? "positive" : "negative"}`}
            >
              {amount3 > 0 ? (
                <KeyboardArrowUpIcon fontSize={"small"} />
              ) : (
                <KeyboardArrowDownIcon fontSize={"small"} />
              )}
              <div className="resultAmount">{`${amount3} €`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
