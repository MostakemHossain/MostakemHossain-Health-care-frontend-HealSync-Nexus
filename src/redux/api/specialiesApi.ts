import { baseApi } from "./baseApi";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpeciality: build.mutation({
      query: (data) => ({
        url: "/specialties/create-specialist",
        method: "POST",
        contentType: "mulipart/form-data",
        data,
      }),
    }),
  }),
});
export const { useCreateSpecialityMutation } = specialtiesApi;
