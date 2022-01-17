import { Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
interface ITextInput {
  name: string;
  type: "text" | "password";
  label: string;
}

export const RHFTextInput: React.FC<ITextInput> = ({ name, type, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input type={type} placeholder={label} {...register(name)} />
      {errors[name] && (
        <Typography variant="caption" sx={{ color: "red" }}>
          {errors[name].message}
        </Typography>
      )}
    </>
  );
};
