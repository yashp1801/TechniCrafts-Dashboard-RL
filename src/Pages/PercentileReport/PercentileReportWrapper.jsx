import React from "react";
import PercentileReport from "./PercentileReport";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { generateReportApi } from "../../Store/Slices/generateReportSlice";

const PercentileReportWrapper = () => {
  return (
    <ApiProvider api={generateReportApi}>
      <PercentileReport />
    </ApiProvider>
  );
};

export default PercentileReportWrapper;
