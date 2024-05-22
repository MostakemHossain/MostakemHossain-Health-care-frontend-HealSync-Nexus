import { tagTypes } from "../tag-types";
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
      invalidatesTags: [tagTypes.specialties],
    }),
    deleteSpeciality: build.mutation({
      query: (id) => ({
        url: `/specialties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.specialties],
    }),
    getAllSpecialies: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags: [tagTypes.specialties],
    }),
  }),
});
export const {
  useCreateSpecialityMutation,
  useGetAllSpecialiesQuery,
  useDeleteSpecialityMutation,
} = specialtiesApi;
