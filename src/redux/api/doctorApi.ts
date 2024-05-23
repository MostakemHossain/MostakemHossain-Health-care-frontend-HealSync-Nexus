import { IMeta } from "@/types";
import { IDoctor } from "@/types/doctor";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
    getAllDoctors: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctors",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: { data: IDoctor[]; meta: IMeta }) => {
        return response;
      },
      providesTags: [tagTypes.doctor],
    }),
    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctors/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
  }),
});

export const {
  useCreateDoctorMutation,
  useGetAllDoctorsQuery,
  useDeleteDoctorMutation,
} = doctorApi;
