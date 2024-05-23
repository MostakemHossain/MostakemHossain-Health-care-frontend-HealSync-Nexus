"use client";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import { useDebounced } from "@/redux/hooks";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import { useState } from "react";
import DoctorModal from "./components/DoctorModal";

const DoctorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }
  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const doctors = data?.data;
  const meta = data?.meta;

  const handleDelete = async (id: string) => {
    try {
      // Your delete logic here
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "appointmentFee", headerName: "Appointment Fee", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <GridDeleteIcon
              sx={{
                color: "red",
              }}
            />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button onClick={() => setIsModalOpen(true)}>Create A Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search Doctor"
        />
      </Stack>
      {!isLoading ? (
        <Box
          sx={{
            my: 3,
          }}
        >
          <DataGrid rows={doctors || []} columns={columns} />
        </Box>
      ) : (
        <Box sx={{ width: "full", p: "100px" }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      )}
    </Box>
  );
};

export default DoctorPage;
