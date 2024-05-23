import HealSyncDatePicker from "@/components/Forms/HealSyncDatePicker";
import HealSyncTimePicker from "@/components/Forms/HealSyncTimePicker";
import HealthSyncForm from "@/components/Forms/healthSyncForm";
import HealSyncModal from "@/components/Shared/HealSyncModal/HealSyncModal";
import { dateFormatter } from "@/utils/DateFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const onSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    console.log(values);
    try {
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <HealSyncModal open={open} setOpen={setOpen} title="Create Schedule">
      <HealthSyncForm onSubmit={onSubmit}>
        <Grid
          container
          spacing={2}
          sx={{
            width: "400px",
          }}
        >
          <Grid item md={12}>
            <HealSyncDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12} my={2}>
            <HealSyncDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <HealSyncTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <HealSyncTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </HealthSyncForm>
    </HealSyncModal>
  );
};

export default ScheduleModal;
