import { Box, Button, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Informe um email válido")
    .required("O email é obrigatório."),
  password: yup
    .string()
    .min(6, "A senha deve possuir no mínimo 6 caracteres.")
    .required("A senha é obrigatória."),
});

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
  };

  return (
    <Stack
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#2b2a33",
      }}
    >
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={2}
            sx={{
              p: 4,
              width: "300px",
              borderRadius: 1,
              background: "#edede9",
            }}
          >
            <Typography variant="h4" textAlign="center">
              Login RHF
            </Typography>
            <input type="text" placeholder="Email" {...register("email")} />
            {errors.email && (
              <Typography variant="caption" sx={{ color: "red" }}>
                {errors.email.message}
              </Typography>
            )}
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {errors.password && (
              <Typography variant="caption" sx={{ color: "red" }}>
                {errors.password.message}
              </Typography>
            )}
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default Home;
