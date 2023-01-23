import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CheckEmailForm } from "../components/CheckEmailForm/CheckEmailForm";
import Container from "@mui/material/Container";
import { getBreaches } from "../api/index";

export const Home = () => {
  const onFormSubmit = (values) => {
    getBreaches(values);
  };

  return (
    <Container>
      <Box>
        <Grid direction="column" alignItems="center" container>
          <Grid item align="center">
            <h1>Am I Compromised?</h1>
            <p>See if your email was compromised in a data breach</p>
          </Grid>
          <Grid item>
            <CheckEmailForm onSubmit={onFormSubmit} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
