import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./sidebar.style.css";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
            className="list-group-item list-group-item-action my-2 text-white bg-primary rounded"
          >
            <span>Dashboard</span>
          </Link>
          <button
            className="list-group-item list-group-item-action my-2 btn btn-link"
            onClick={handleLogout}
          >
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
