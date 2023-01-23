import React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BreachesTableRow } from "./BreachesTableRow";

const propTypes = {
  breaches: PropTypes.arrayOf(
    PropTypes.shape({
      Id: PropTypes.string.isRequired,
      Date: PropTypes.string,
      EmailCount: PropTypes.number,
      Source: PropTypes.string,
      Title: PropTypes.string,
    })
  ),
};

export const BreachesTable = ({ breaches }) => {
  if (!breaches) return null;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="breaches">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Email Count</TableCell>
            <TableCell align="right">Source</TableCell>
            <TableCell align="right">Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {breaches.map(({ Id, Date, EmailCount, Source, Title }) => (
            <BreachesTableRow
              key={Id}
              date={Date}
              emailCount={EmailCount}
              source={Source}
              title={Title}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

BreachesTable.propTypes = propTypes;
