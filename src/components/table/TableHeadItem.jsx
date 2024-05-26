import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CaretUpFilled,
} from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import "./table.css";

const TableHeadItem = ({ item, onSort, sortedIndex, setSortedIndex }) => {
  const [direction, setDirection] = useState(null);

  const onSortHandler = () => {
    setSortedIndex(item.dataIndex);
    setDirection((direction) => {
      if (direction === "asc") {
        onSort(item.dataIndex, "desc");
        return "desc";
      }
      if (direction === "desc" || !direction) {
        onSort(item.dataIndex, "asc");
        return "asc";
      }
      return null;
    });
  };

  return (
    <th title={item.title} className="table-th">
      <div className="table-th-container">
        <div> {item.title}</div>
        {item.sort && (
          <span>
            {
              <Button type="text" onClick={onSortHandler}>
                {sortedIndex !== item.dataIndex ? (
                  <CaretUpFilled />
                ) : direction === "asc" ? (
                  <ArrowUpOutlined />
                ) : direction === "desc" ? (
                  <ArrowDownOutlined />
                ) : null}
              </Button>
            }
          </span>
        )}
      </div>
    </th>
  );
};

export default TableHeadItem;
