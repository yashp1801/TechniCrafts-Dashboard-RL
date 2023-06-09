import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HEADERS, BASE_URL } from "../../api";

export const overallSummaryApi = createApi({
  reducerPath: "overallSummary",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSiteStatus: builder.query({
      query: () => ({
        url: "sites/overall_sites",
        method: "GET",
        headers: HEADERS,
      }),
    }),
    getSitesData: builder.query({
      query: () => ({
        url: "/sites",
        method: "GET",
        headers: HEADERS,
      }),
    }),
    getPastWeekSiteStatus: builder.query({
      query: () => ({
        url: "sites/site-status",
        method: "GET",
        headers: HEADERS,
      }),
    }),
  }),
});

export const {
  useGetSiteStatusQuery,
  useGetSitesDataQuery,
  useGetPastWeekSiteStatusQuery,
} = overallSummaryApi;
