import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./PieChart.css";
import { useGetSiteStatusQuery } from "../../../Store/Slices/overallSummarySlice";
import Loader from "../../../global/Loader/Loader";
import CategoryPie from "./CategoryPie";
const COLORS = ["#32cd32", "#808080", "#FFA500", "#fb3b1e"];

const SiteStatusPie = () => {
  const responseInfo = useGetSiteStatusQuery();

  if (responseInfo.isLoading) return <Loader />;

  const siteData = [
    { name: "Active", value: responseInfo?.data.totalSiteStatus.active },
    { name: "Inactive", value: responseInfo?.data.totalSiteStatus.inactive },
    { name: "Delayed", value: responseInfo?.data.totalSiteStatus.delayed },
  ];

  const stationData = [
    { name: "Effluent", value: responseInfo?.data.totalStation.effluent },
    { name: "Emission", value: responseInfo?.data.totalStation.emission },
    { name: "Ambient", value: responseInfo?.data.totalStation.ambient },
  ];

  return (
    <div>
      <div className="piechart__wrapper">
        <p>Total Stations</p>
        <PieChart width={300} height={300} className="piechart">
          <Pie
            data={stationData}
            cx={140}
            cy={130}
            outerRadius={80}
            fill="#8884d8"
            label
            dataKey="value"
          >
            {stationData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <CategoryPie />
    </div>
  );
};

export default SiteStatusPie;
