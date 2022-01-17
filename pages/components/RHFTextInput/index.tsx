import { Typography, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
interface ITextInput {
  name: string;
  type: "text" | "password";
  label: string;
}

export const RHFTextInput: React.FC<ITextInput> = ({ name, type, label }) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          error={!!errors[name]}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
};
