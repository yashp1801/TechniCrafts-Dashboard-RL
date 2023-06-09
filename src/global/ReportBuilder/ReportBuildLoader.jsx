import React from "react";
import video from "../../Images/reportBuild.mp4";
import "./ReportBuildLoader.css";

const ReportBuildLoader = () => {
  return (
    <div className="reportbuildloader">
      <video src={video} autoPlay loop style={{ height: "200px" }}></video>
      <p>Generating report please wait...</p>
    </div>
  );
};

export default ReportBuildLoader;
