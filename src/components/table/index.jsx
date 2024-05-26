import React, { useState } from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHeadItem";
import { Spin } from "antd";
import "./table.css";

const Table = ({
  columns = [],
  customClass = "",
  onSort = () => {},
  data = [],
  rowId,
  loading = false,
}) => {
  const [sortedIndex, setSortedIndex] = useState(null);
  const updateSortDirection = (value) => {
    setSortedIndex(value);
  };
  return (
    <Spin spinning={loading}>
      <table className={`table ${customClass}`}>
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <TableHeadItem
                  key={column.dataIndex}
                  item={column}
                  onSort={onSort}
                  sortedIndex={sortedIndex}
                  setSortedIndex={updateSortDirection}
                />
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <TableRow key={item[rowId]} columns={columns} rowData={item} />
            );
          })}
        </tbody>
      </table>
    </Spin>
  );
};

export default Table;
