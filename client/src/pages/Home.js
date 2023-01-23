import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CheckEmailForm } from "../components/CheckEmailForm/CheckEmailForm";
import Container from "@mui/material/Container";
import { getBreaches } from "../api/index";
import { BreachesTable } from "../components/BreachesTable";
import { LoadingIndicator } from "../components/LoadingIndicator";

const styles = {
  loadingIndicator: {
    margin: "4em",
  },
};

export const Home = () => {
  const [breaches, setBreaches] = useState(null);
  const [loading, setLoading] = useState(false);
  const onFormSubmit = async (values) => {
    setLoading(true);
    const data = await getBreaches(values);
    setLoading(false);
    setBreaches(data);
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
          <Grid item>
            {loading ? (
              <LoadingIndicator style={styles.loadingIndicator} />
            ) : (
              <BreachesTable breaches={breaches} />
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
