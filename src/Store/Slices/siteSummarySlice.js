import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HEADERS, BASE_URL } from "../../api";

export const siteSummaryApi = createApi({
  reducerPath: "siteSummaryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getSiteSummaryData: builder.query({
      query: () => ({
        url: "sites",
        method: "GET",
        headers: HEADERS,
      }),
    }),
    //
    getCurrentSiteData: builder.query({
      query: (id) => ({
        url: `sites/?site_id=${id}`,
        method: "GET",
        headers: HEADERS,
      }),
    }),
    //
    getCurrentSiteParameterData: builder.query({
      query: (id) => ({
        url: `/parameters/realtime-values/?site_id=${id}`,
        method: "GET",
        headers: HEADERS,
      }),
    }),
    getParameterData: builder.query({
      query: () => ({
        url: "/parameters/realtime-values",
        method: "GET",
        headers: HEADERS,
      }),
    }),
  }),
});

export const {
  useGetSiteSummaryDataQuery,
  useGetCurrentSiteDataQuery,
  useGetCurrentSiteParameterDataQuery,
  useGetParameterDataQuery,
} = siteSummaryApi;
