"use client";
import {
  useDeleteSpecialityMutation,
  useGetAllSpecialiesQuery,
} from "@/redux/api/specialiesApi";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import SpecialistsModal from "./components/specialistsModal";

const Specialties = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialiesQuery({});
  const [deleteSpeciality] = useDeleteSpecialityMutation();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpeciality(id).unwrap();
      if (res?.id) {
        toast.success("Speciality is Deleted Successfully!!");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      display: "flex",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} width={30} height={30} alt="icon" />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      display: "flex",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon
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
        alignItems="center"
      >
        <Button onClick={() => setIsModalOpen(true)}>Create Speciality</Button>
        <SpecialistsModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      {!isLoading ? (
        <Box
          sx={{
            my: 3,
          }}
        >
          <DataGrid rows={data} columns={columns} />
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

export default Specialties;
