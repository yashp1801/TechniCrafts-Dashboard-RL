import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, HEADERS } from "../../api";

export const generateReportApi = createApi({
  reducerPath: "generateReport",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    categoryData: builder.query({
      query: () => ({
        url: "setup/category",
        method: "GET",
        headers: HEADERS,
      }),
    }),
    siteName: builder.query({
      query: () => ({
        url: "sites",
        method: "GET",
        headers: HEADERS,
      }),
    }),
    getSelectedSiteData: builder.query({
      query: (id) => ({
        url: `sites/?site_id=${id}`,
        method: "GET",
        headers: HEADERS,
      }),
    }),
    stationName: builder.query({
      query: (id) => ({
        url: `stations/?site_id=${id}`,
        method: "GET",
        headers: HEADERS,
      }),
    }),
    getaverageReport: builder.query({
      query: (
        startDate,
        endDate,
        selectedSiteId,
        station,
        selectedTimeInterval,
        value
      ) => ({
        url: `data/average?from=${startDate ? startDate : null}&to=${
          endDate ? endDate : "null"
        }&site_id=${selectedSiteId ? selectedSiteId : null}&station=${
          station ? station : null
        }&interval=${selectedTimeInterval}${
          value ? value.map((item) => `&parameters${item}`).join("") : null
        }`,
        method: "GET",
        headers: HEADERS,
      }),
    }),
  }),
});

export const {
  useCategoryDataQuery,
  useSiteNameQuery,
  useStationNameQuery,
  useGetSelectedSiteDataQuery,
  useGetaverageReportQuery,
} = generateReportApi;
