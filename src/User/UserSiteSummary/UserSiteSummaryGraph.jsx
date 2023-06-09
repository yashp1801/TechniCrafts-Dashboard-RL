import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./UserSiteSummary.css";
const data = [
  { name: "Jan", BOD: 4000, COD: 2400, TSS: 1398, pH: 1890, amt: 2400 },
  { name: "Feb", BOD: 3000, COD: 1398, TSS: 2000, pH: 2780, amt: 2210 },
  { name: "Mar", BOD: 2000, COD: 9800, TSS: 1398, pH: 1398, amt: 2290 },
  { name: "Apr", BOD: 2780, COD: 1398, TSS: 4000, pH: 2780, amt: 2000 },
  { name: "May", BOD: 1890, COD: 4800, TSS: 2000, pH: 1398, amt: 2181 },
  { name: "Jun", BOD: 2390, COD: 3800, TSS: 1847, pH: 1890, amt: 2500 },
  { name: "Jul", BOD: 3490, COD: 4300, TSS: 1398, pH: 2000, amt: 2100 },
];

const UserSiteSummaryGraph = () => {
  return (
    <LineChart
      width={900}
      height={300}
      data={data}
      className="graph"
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="BOD"
        stroke="#FF0000"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="COD" stroke="#0000FF" />
      <Line type="monotone" dataKey="TSS" stroke="#0000FF" />
      <Line type="monotone" dataKey="pH" stroke="#82ca9d" />
    </LineChart>
  );
};

export default UserSiteSummaryGraph;
