import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

import moment from "moment";

const FilteredReportGraph = ({ averageReport }) => {
  const formatTimestamp = (timestamp) => {
    return moment(timestamp).format("HH:mm:ss");
  };

  // Extract parameter names from the first data object
  const parameterNames = Object.keys(averageReport[0]).filter(
    (key) => key !== "timestamp"
  );
  const exportGraph = () => {
    const graphElement = document.querySelector(".filteredreport__graphView");
    html2canvas(graphElement).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "graph.png"); // Specify the filename for the exported graph
      });
    });
  };

  const colors = [
    "#1f77b4", // Dark blue
    "#ff7f0e", // Dark orange
    "#2ca02c", // Dark green
    "#d62728", // Dark red
    "#9467bd", // Dark purple
    "#e377c2", // Dark pink
    "#bcbd22", // Dark yellow-green
    "#17becf", // Dark cyan
  ];

  return (
    <div className="filteredreport__graphView">
      <h1>Graph View</h1>
        <button onClick={exportGraph}>Export Graph</button>
      <ResponsiveContainer width={900} height={400}  className="userdata__graph">
        <LineChart width={900} height={400} data={averageReport}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tickFormatter={formatTimestamp} />
          <YAxis />
          <Tooltip />
          <Legend />
          {parameterNames.map((parameterName, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={parameterName}
              stroke={colors[index % colors.length]} // Use colors from the array based on index
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default FilteredReportGraph;
