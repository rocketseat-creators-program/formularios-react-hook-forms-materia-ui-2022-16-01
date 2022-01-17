import { Box, Button, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
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
        <form>
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
            <input type="text" name="name" placeholder="Nome" />
            <input type="password" name="password" placeholder="Senha" />
            <Button variant="contained">Enviar</Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default Home;
