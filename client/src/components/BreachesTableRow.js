import React from "react";
import PropTypes from "prop-types";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { formatToLocalDate } from "../util/formatDate";

const propTypes = {
  date: PropTypes.string,
  emailCount: PropTypes.number,
  source: PropTypes.string,
  title: PropTypes.string,
};

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

BreachesTableRow.propTypes = propTypes;
