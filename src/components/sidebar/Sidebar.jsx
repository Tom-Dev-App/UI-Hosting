import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.style.css";

const Sidebar = () => {
  return (
    <>
      <div className="bg-white sidebar p-2">
        <div className="m-2">
          <Link to="/" className="text-decoration-none">
            <span className="fs-1">Celerates</span>
          </Link>
        </div>
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
          <Link
            to="/dashboard"
            className="list-group-item list-group-item-action my-2 text-white bg-primary rounded">
            <span>Dashboard</span>
          </Link>
          <Link to="/" className="list-group-item list-group-item-action my-2">
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
