import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// const baseQuery = fetchBaseQuery({
//     baseUrl: "http://localhost:8000"
// })
// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000"
}),
  endpoints: (builder) => ({}),
});