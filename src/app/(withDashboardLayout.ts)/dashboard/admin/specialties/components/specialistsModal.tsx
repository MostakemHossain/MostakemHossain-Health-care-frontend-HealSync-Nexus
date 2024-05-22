import HealSyncFileUpload from "@/components/Forms/HealSyncFileUpload/HealSyncFileUpload";
import HealthSyncInput from "@/components/Forms/HealthSyncInput";
import HealthSyncForm from "@/components/Forms/healthSyncForm";
import HealSyncModal from "@/components/Shared/HealSyncModal/HealSyncModal";
import { useCreateSpecialityMutation } from "@/redux/api/specialiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistsModal = ({ open, setOpen }: TProps) => {
  const [createSpeciality] = useCreateSpecialityMutation();
  const handleSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpeciality(data).unwrap();
      if (res?.id) {
        toast.success("Speciality Created Successfully");
        setOpen(false);
      }
    } catch (error: any) {
      console.error(error.massage);
    }
  };
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
          type="submit"
        >
          Create Speciality
        </Button>
      </HealthSyncForm>
    </HealSyncModal>
  );
};

export default SpecialistsModal;
