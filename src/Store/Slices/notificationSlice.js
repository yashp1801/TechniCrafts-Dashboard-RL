import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, HEADERS } from "../../api";

export const noficationsApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getNotificationsData: builder.query({
      query: () => ({
        url: "notifications/list",
        method: "GET",
        headers: HEADERS,
      }),
    }),
  }),
});

export const { useGetNotificationsDataQuery } = noficationsApi;
