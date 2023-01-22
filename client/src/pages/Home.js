import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export const Home = () => {
  return (
    <Box>
      <Grid
        direction="column"
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item>
          <h1>Am I Compromised?</h1>
          <p>See if your email was compromised in a data breach</p>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { marginBottom: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              required
              label="Email"
              variant="standard"
            />
          </Box>
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
