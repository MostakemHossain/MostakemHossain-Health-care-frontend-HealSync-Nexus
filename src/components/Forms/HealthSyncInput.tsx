import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  required: boolean;
  sx?: SxProps;
  placeholder?: string;
};

const HealthSyncInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
  sx,
  placeholder,
  required,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          sx={{ ...sx }}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          placeholder={label}
          required={required}
        />
      )}
    />
  );
};

export default HealthSyncInput;
