import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { homePath, notFoundPath } from "./routes";

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={homePath} element={<Home />} />
      <Route path={notFoundPath} element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
