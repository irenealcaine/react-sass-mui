import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: Math.random() * (2500 - 200) + 200 },
  { name: "February", Total: Math.random() * (2500 - 200) + 200 },
  { name: "March", Total: Math.random() * (2500 - 200) + 200 },
  { name: "April", Total: Math.random() * (2500 - 200) + 200 },
  { name: "May", Total: Math.random() * (2500 - 200) + 200 },
  { name: "June", Total: Math.random() * (2500 - 200) + 200 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6439ff" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#6439ff" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />

          <CartesianGrid strokeDasharray="1 100" className="chartGrid" />
          <Tooltip />
          <Area
            type="natural"
            dataKey="Total"
            stroke="#6439ff"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
