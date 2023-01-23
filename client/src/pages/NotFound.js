import React from "react";
import { useLocation, Link } from "react-router-dom";
import Error404 from "../images/error-404.png";
import { homePath } from "../routes";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <Box>
        <Grid direction="column" alignItems="center" container>
          <Grid item>
            <Link to={homePath}>
              <img
                src={Error404}
                alt="Error 404"
                width="100px"
                height="100px"
              />
            </Link>
            <p>{`The requested url ${pathname} was not found.`}</p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
