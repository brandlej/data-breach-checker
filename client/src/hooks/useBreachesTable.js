import { useState } from "react";

export const useBreachesTable = (breaches) => {
  const ASC = "asc";
  const DESC = "desc";
  const [tableData, setTableData] = useState(breaches);
  const [sortDirection, setSortDirection] = useState(ASC);
  const [searchInput, setSearchInput] = useState("");

  const sortArrayByEmailCount = (arr, sortBy) => {
    switch (sortBy) {
      case ASC:
        return arr.sort((a, b) =>
          a["EmailCount"] < b["EmailCount"]
            ? 1
            : b["EmailCount"] < a["EmailCount"]
            ? -1
            : 0
        );
      case DESC:
      default:
        return arr.sort((a, b) =>
          a["EmailCount"] > b["EmailCount"]
            ? 1
            : b["EmailCount"] > a["EmailCount"]
            ? -1
            : 0
        );
    }
  };

  const handleSort = () => {
    setTableData(sortArrayByEmailCount(tableData, sortDirection));
    setSortDirection(sortDirection === ASC ? DESC : ASC);
  };

  const handleFilter = ({ target: { value } }) => {
    const filteredData = [...breaches].filter((row) => {
      if (!row.Title) return false;
      return row.Title.toLowerCase().includes(value.toLowerCase());
    });
    setTableData(filteredData);
    setSearchInput(value);
  };

  return [tableData, sortDirection, searchInput, handleSort, handleFilter];
};
