import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart.jsx";
import "./deliveries.scss";

const Deliveries = () => {
  return (
    <div className="deliveries">
      <Sidebar />
      <div className="deliveriesContainer">
        <Navbar />
        <div className="chartContainer">
          <Chart aspect={2 / 1} title={"Last 6 months (revenue)"} />
        </div>
      </div>
    </div>
  );
};

export default Deliveries;
