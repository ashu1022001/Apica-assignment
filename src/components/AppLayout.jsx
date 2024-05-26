import { Col, Row } from "antd";
import React from "react";
import "./global-css.css";
import SideBar from "./side-bar/SideBar";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./main-layout/MainLayout";

const AppLayout = () => {
  return (
    <BrowserRouter>
      <Row style={{ minHeight: "100vh" }}>
        <Col span={3}>
          <SideBar />
        </Col>
        <Col span={21}>
          <MainLayout />
        </Col>
      </Row>
    </BrowserRouter>
  );
};

export default AppLayout;
