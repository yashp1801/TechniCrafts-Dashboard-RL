import { useState } from "react";
import Error from "../../../global/Error/Error";
import { useGetSitesDataQuery } from "../../../Store/Slices/overallSummarySlice";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import "./PieChart.css";
import Skeleton from "@mui/material/Skeleton";

const CategoryPie = () => {
  const categories = {};
  const res = useGetSitesDataQuery();
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#fb3b1e"];

  res?.data?.forEach((item) => {
    if (!categories[item.category]) {
      categories[item.category] = 0;
    }
    categories[item.category]++;
  });

  const categoryData = Object.keys(categories).map((key) => ({
    name: key,
    value: categories[key],
  }));


  if (res.isError) return <Error />;
  return (
    <div className="piechart__wrapper">
      <p>Category Wise</p>
      {res.isLoading ? (
        <Skeleton variant="rectangular" width={210} height={60} />
      ) : (
        <PieChart width={300} height={300} className="piechart">
          <Pie
            data={categoryData}
            cx={140}
            cy={130}
            outerRadius={80}
            fill="#8884d8"
            label
            dataKey="value"
          >
            {categoryData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </div>
  );
};

export default CategoryPie;
