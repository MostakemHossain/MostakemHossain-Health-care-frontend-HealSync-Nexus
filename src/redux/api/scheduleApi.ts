import { IMeta } from "@/types";
import { IDoctor } from "@/types/doctor";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
    getAllDoctors: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/schedule",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: { data: IDoctor[]; meta: IMeta }) => {
        return response;
      },
      providesTags: [tagTypes.schedule],
    }),
    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
  }),
});

export const {
  useCreateDoctorMutation,
  useDeleteDoctorMutation,
  useGetAllDoctorsQuery,
} = scheduleApi;
