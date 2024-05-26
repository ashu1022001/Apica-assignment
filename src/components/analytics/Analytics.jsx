import React, { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import { Col, Row, message } from "antd";
import { Pie } from "@ant-design/plots";
import { useAnalytics } from "./useAnalytics";
import GraphCard from "./GraphCard";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [cardData, seCardtData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getAmountGraphData } = useAnalytics();
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getArticles();

      setData(getAmountGraphData(data, "finance_name"));
      seCardtData(getAmountGraphData(data, "finance_credit_card"));
    } catch {
      message.error("Somthing went wrong");
    }

    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getPieConfig = (data, field) => {
    const pieConfig = {
      data: data,
      angleField: field,
      colorField: "type",
      label: {
        text: field,
      },
    };
    return pieConfig;
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <GraphCard
          title={"Finance with total amount"}
          config={{ ...getPieConfig(data, "value") }}
        />
      </Col>
      <Col span={12}>
        <GraphCard
          title={"Finance with total number of accounts"}
          config={{ ...getPieConfig(data, "count") }}
        />
      </Col>
      <Col span={12}>
        <GraphCard
          title={"Cards with total amount"}
          config={{ ...getPieConfig(cardData, "value") }}
        />
      </Col>
      <Col span={12}>
        <GraphCard
          title={"Cards with total number of accounts"}
          config={{ ...getPieConfig(cardData, "count") }}
        />
      </Col>
    </Row>
  );
};

export default Analytics;
