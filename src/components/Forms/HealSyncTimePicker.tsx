import { SxProps } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

interface ITimePicker {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}
const HealSyncTimePicker = ({
  name,
  size = "small",
  label,
  required,
  fullWidth = true,
  sx,
}: ITimePicker) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label={label}
              timezone="system"
              {...field}
              onChange={(time) => onChange(time)}
              value={value || Date.now()}
              slotProps={{
                textField: {
                  required: required,
                  size: size,
                  sx: {
                    ...sx,
                  },
                  variant: "outlined",
                  fullWidth: fullWidth,
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default HealSyncTimePicker;
