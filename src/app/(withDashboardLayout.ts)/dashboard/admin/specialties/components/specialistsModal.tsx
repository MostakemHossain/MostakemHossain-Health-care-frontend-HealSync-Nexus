import HealSyncFileUpload from "@/components/Forms/HealSyncFileUpload/HealSyncFileUpload";
import HealthSyncInput from "@/components/Forms/HealthSyncInput";
import HealthSyncForm from "@/components/Forms/healthSyncForm";
import HealSyncModal from "@/components/Shared/HealSyncModal/HealSyncModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistsModal = ({ open, setOpen }: TProps) => {
  const handleSubmit = (values: FieldValues) => {};
  return (
    <HealSyncModal open={open} setOpen={setOpen} title="Create A new Specialty">
      <HealthSyncForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <HealthSyncInput name="title" label="title" />
          </Grid>
          <Grid item md={6}>
            <HealSyncFileUpload name={"file"} label="Upload File" />
          </Grid>
        </Grid>
        <Button
          sx={{
            mt: 1,
          }}
        >
          Create Speciality
        </Button>
      </HealthSyncForm>
    </HealSyncModal>
  );
};

export default SpecialistsModal;
