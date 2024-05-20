import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";

const Dahboard = () => {
  return (
    <>
      <div className="container-fluid bg-primary min-vh-100">
        <div className="row">
          <div className="col-2 bg-white vh-100">
            <Sidebar />
          </div>
          <div className="col-10 p-5">
            <div className="mb-3">
              <h1 className="text-white">Kelola User</h1>
              <Link to="/dashboard/create" class="btn btn-success">
                Create
              </Link>
            </div>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dahboard;
