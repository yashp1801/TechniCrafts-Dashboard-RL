import React, { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useGetPastWeekSiteStatusQuery } from "../../../Store/Slices/overallSummarySlice";

const BarChartComponent = () => {
  const {
    data: responseData,
    isLoading,
    isError,
    error,
  } = useGetPastWeekSiteStatusQuery();

  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Check if data is an array and has length
  if (!Array.isArray(responseData) || responseData.length === 0) {
    return (
      <p style={{color : "royalBlue"  }} >Regrettably, there is a lack of accessible data at the moment.  </p>
    );
  }

  // Parse numeric values
  const parsedData = responseData.map((item) => ({
    ...item,
    Active: parseInt(item.Active),
    Inactive: parseInt(item.Inactive),
    delay: parseInt(item.delay),
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart width={800} height={400} data={parsedData}>
        <CartesianGrid stroke="#a9a9a938" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="Active"
          stroke="#0088FE"
          fill="#0087fe3f"
          activeDot={{ r: 8 }}
        />
        <Area
          type="monotone"
          dataKey="Inactive"
          stroke="#A9A9A9"
          fill="#a9a9a938"
        />
        <Area
          type="monotone"
          dataKey="delay"
          stroke="yellow"
          fill="#fdf44248"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
