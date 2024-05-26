import { Pie } from "@ant-design/plots";
import { Card } from "antd";
import React from "react";

const GraphCard = ({ title, config }) => {
  return (
    <Card title={title}>
      <Pie {...config} />
    </Card>
  );
};

export default GraphCard;
