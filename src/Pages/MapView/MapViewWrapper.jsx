import React from "react";
import MapView from "./MapView";
import { siteSummaryApi } from "../../Store/Slices/siteSummarySlice";
import { ApiProvider } from "@reduxjs/toolkit/query/react";



const MapViewWrapper = () => {
  return (
    <ApiProvider api={siteSummaryApi}>
      <MapView />
    </ApiProvider>
  );
};

export default MapViewWrapper;
