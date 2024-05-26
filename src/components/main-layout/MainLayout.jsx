import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";

const MainLayout = () => {
  return (
    <div className="main-container">
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.Component} />
        ))}
      </Routes>
    </div>
  );
};

export default MainLayout;
