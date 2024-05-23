import HealSyncSelectField from "@/components/Forms/HealSyncSelectField";
import HealthSyncInput from "@/components/Forms/HealthSyncInput";
import HealthSyncForm from "@/components/Forms/healthSyncForm";
import HealSyncFullScreenModal from "@/components/Shared/HealSyncModal/HealSyncFullScreenModal";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const [createDoctor] = useCreateDoctorMutation();
  const onSubmit = async (values: FieldValues) => {
    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.appointmentFee = Number(values.doctor.appointmentFee);
    
    const data = modifyPayload(values);
    console.log(data);
    try {
      const res = await createDoctor(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Doctor Created Successfully");
        setOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const defaultValues = {
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      gender: "",
      experience: 0,
      appointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },
    password: "",
  };

  return (
    <HealSyncFullScreenModal
      open={open}
      setOpen={setOpen}
      title="Create A Doctor"
    >
      <HealthSyncForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 6 }}>
          <Grid item xs={12} sm={12} md={4}>
            <HealthSyncInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HealthSyncInput
              name="doctor.email"
              label="Email"
              type="email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HealthSyncInput
              name="password"
              label="Password"
              type="password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HealthSyncInput
              name="doctor.contactNumber"
              label="Contact Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HealthSyncInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HealthSyncInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HealthSyncInput
              name="doctor.experience"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HealSyncSelectField
              items={Gender}
              name="doctor.gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HealthSyncInput
              name="doctor.appointmentFee"
              label="Appointment Fee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HealthSyncInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HealthSyncInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <HealthSyncInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
        <Box>
          <Button type="submit">Create</Button>
        </Box>
      </HealthSyncForm>
    </HealSyncFullScreenModal>
  );
};

export default DoctorModal;
