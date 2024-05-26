import React from "react";
import { feed } from "./feed";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      {feed.map(({ path, icon, title }) => {
        return (
          <NavLink to={path} className="sidebar-item-container" key={path}>
            <div>{icon}</div>
            <div className="side-item-title">{title}</div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBar;
