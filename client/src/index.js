import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const light = createTheme({
  palette: {
    background: {
      default: "#FAF9F6",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
