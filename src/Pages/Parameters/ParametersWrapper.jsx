import React from "react";
import { siteSummaryApi } from "../../Store/Slices/siteSummarySlice";
import Parameters from "./Parameters";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

const ParametersWrapper = () => {
  return (
    <ApiProvider api={siteSummaryApi} >
      <Parameters   />
    </ApiProvider>
  );
};

export default ParametersWrapper;
