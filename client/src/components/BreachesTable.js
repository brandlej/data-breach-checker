import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BreachesTableRow } from "./BreachesTableRow";
import { useBreachesTable } from "../hooks/useBreachesTable";

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
  const [tableData, sortDirection, searchInput, handleSort, handleFilter] =
    useBreachesTable(breaches);

  if (!tableData) return null;

  return (
    <>
      <Paper>
        <TextField
          fullWidth
          label="Search breaches by Title"
          type="search"
          variant="filled"
          value={searchInput}
          onChange={handleFilter}
        />
      </Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="breaches">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right" onClick={handleSort}>
                <TableSortLabel active={true} direction={sortDirection}>
                  Email Count
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">Source</TableCell>
              <TableCell align="right">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map(({ Id, Date, EmailCount, Source, Title }) => (
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
    </>
  );
};

BreachesTable.propTypes = propTypes;
