import React from "react";
import SiteStatus from "./SiteStatus";
import { siteSummaryApi } from "../../Store/Slices/siteSummarySlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

const SiteStatusWrapper = () => {
  return (
    <ApiProvider api={siteSummaryApi}>
      <SiteStatus />
    </ApiProvider>
  );
};

export default SiteStatusWrapper;
