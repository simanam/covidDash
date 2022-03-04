import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const covidApiHeader = {
  "x-rapidapi-host":
    "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
  "x-rapidapi-key": "bffa1d85cemsh6f262b2bade45eap1d3a53jsndb5a9104d35f",
};

const baseUrl =
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com";
// "https://covid-193.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: covidApiHeader,
});
export const covidApi = createApi({
  reducerPath: "covidApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCovidData: builder.query({
      query: () => createRequest("/api/npm-covid-data/world"),
    }),
    getCountriesData: builder.query({
      query: () => createRequest("/api/npm-covid-data/countries"),
    }),
  }),
});

export const { useGetCovidDataQuery, useGetCountriesDataQuery } = covidApi;
