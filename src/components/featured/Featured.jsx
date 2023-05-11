import "./featured.scss";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const Featured = () => {
  return (
    <div className="featured">
      <span className="top">
        <h1 className="title">Total revenue</h1>
        <DragIndicatorIcon fontSize="small" />
      </span>
      <span className="bottom">
        <div className="featuredChart"></div>
      </span>
    </div>
  );
};

export default Featured;
