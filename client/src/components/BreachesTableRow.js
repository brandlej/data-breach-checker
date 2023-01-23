import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { formatToLocalDate } from "../lib/formatDate";

export const BreachesTableRow = ({ date, emailCount, source, title }) => (
  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
    <TableCell component="th" scope="row">
      {formatToLocalDate(date)}
    </TableCell>
    <TableCell align="right">{emailCount}</TableCell>
    <TableCell align="right">{source}</TableCell>
    <TableCell align="right">{title}</TableCell>
  </TableRow>
);
