import React from "react";
import { useGetSiteSummaryDataQuery } from "../../Store/Slices/siteSummarySlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { siteSummaryApi } from "../../Store/Slices/siteSummarySlice";
import StationStatus from "./StationStatus";

const StationStatusWrapper = () => {
  const userType = localStorage.getItem("role");
  const siteId = localStorage.getItem("siteId");
  return (
    <ApiProvider api={siteSummaryApi}>
      {userType === "admin" ? (
        <StationStatus />
      ) : (
        <StationStatus siteId={siteId} />
      )}
    </ApiProvider>
  );
};

export default StationStatusWrapper;
