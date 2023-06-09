import React from "react";
import "./SiteSummary.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { siteSummaryApi } from "../../Store/Slices/siteSummarySlice";
// import SiteSummarySlider from "./SiteSummaryMain"
import SiteSummaryMain from "./SiteSummaryMain";

const SiteSummary = () => {
  const userType = localStorage.getItem("role");
  return (
    <div className= {userType === "admin" ? "sitesummary" : "sitesummary userside"}   >
      {userType === "admin" ? <h1>Site Summary</h1> : null}
      <ApiProvider api={siteSummaryApi}>
        <SiteSummaryMain   />
      </ApiProvider>
    </div>
  );
};

export default SiteSummary;
