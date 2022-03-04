import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://disease.sh/v3/covid-19";

export const caronaApi = createApi({
  reducerPath: "caronaApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCaronaData: builder.query({
      query: () => "/countries",
    }),
    getCaronaHistory: builder.query({
      query: ({ count }) => `historical/all?lastdays=${count}`,
    }),
  }),
});

export const { useGetCaronaDataQuery, useGetCaronaHistoryQuery } = caronaApi;
