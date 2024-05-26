import React from "react";
import "./table.css";

const TableRow = ({ columns, rowData }) => {
  return (
    <tr className="">
      {columns.map((item) => {
        return (
          <td className="tr-td" key={item.dataIndex}>
            {rowData[item.dataIndex]}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
