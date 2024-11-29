
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Itens } from "../../components/layout/card";
import { ModalHome } from "../../components/layout/modal";

function Home() {
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <p className="info">O que você precisa?</p>
          </Grid>
          <Itens />
        </Grid>
      </Box>
      <ModalHome />
    </>
  );
}

export default Home;
