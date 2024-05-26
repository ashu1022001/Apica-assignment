import { Button, Col, DatePicker, Form, Input, Row } from "antd";
import React from "react";

const DashboardFilters = ({ onFilter }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} onFinish={onFilter} layout="vertical">
      <Row gutter={[16]} align={"bottom"}>
        <Col>
          <Form.Item name={"date"} label="Transaction Date">
            <DatePicker.RangePicker />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item name={"account_holder"} label="Account holder">
            <Input placeholder="Account holder" />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item name={"finance_name"} label="Finance Name">
            <Input placeholder="Finance Name" />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              search
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default DashboardFilters;
