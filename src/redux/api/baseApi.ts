import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesLists } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  endpoints: () => ({}),
  tagTypes: tagTypesLists,
});
