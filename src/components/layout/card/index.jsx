import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import api from "../../../services/api";

export function Itens() {
  const [courses, setCourses] = useState([]);

  async function getCourses() {
    const coursesApi = await api.get("/courses");
    setCourses(coursesApi.data.data);
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      {courses.map((item) => (
        <Grid key={item.id} container>
          <Grid size={4}>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined" >
                <CardContent style={{ width: "100%" }}>
                  <Typography variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      ))}
    </>
  );
}
