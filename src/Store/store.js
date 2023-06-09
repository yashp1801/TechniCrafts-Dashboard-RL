import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { overallSummaryApi } from "../Store/Slices/overallSummarySlice";
import { siteSummaryApi } from "./Slices/siteSummarySlice";
import { generateReportApi } from "./Slices/generateReportSlice";
import { noficationsApi } from "./Slices/notificationSlice";

export const store = configureStore({
  reducer: {
    [overallSummaryApi.reducer]: overallSummaryApi.reducer,
    [siteSummaryApi.reducer]: siteSummaryApi.reducer,
    [generateReportApi.reducer]: generateReportApi.reducer,
    [noficationsApi.reducer]: noficationsApi.reducer,
    // [loginApi.reducer]: loginApi.reducer,
  },
});

setupListeners(store.dispatch);
