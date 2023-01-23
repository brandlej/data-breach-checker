import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableSortLabel from "@mui/material/TableSortLabel";
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
  const ASC = "asc";
  const DESC = "desc";

  const [tableData, setTableData] = useState(breaches);
  const [sortDirection, setSortDirection] = useState(ASC);

  const sortArrayByEmailCount = (arr, sortBy) => {
    switch (sortBy) {
      case ASC:
        return arr.sort((a, b) =>
          a.EmailCount < b.EmailCount ? 1 : b.EmailCount < a.EmailCount ? -1 : 0
        );
      case DESC:
      default:
        return arr.sort((a, b) =>
          a.EmailCount > b.EmailCount ? 1 : b.EmailCount > a.EmailCount ? -1 : 0
        );
    }
  };

  const handleSort = () => {
    setTableData(sortArrayByEmailCount(tableData, sortDirection));
    setSortDirection(sortDirection === ASC ? DESC : ASC);
  };

  if (!tableData) return null;

  return (
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
  );
};

BreachesTable.propTypes = propTypes;
