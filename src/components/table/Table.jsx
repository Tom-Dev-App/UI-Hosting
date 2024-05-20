import React from "react";
import { Link } from "react-router-dom";

const Table = () => {
  return (
    <>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ahmad Fauzi</td>
            <td>ahmadfauzi@gmail.com</td>
            <td className="d-flex gap-3">
              <Link to="/dashboard/edit" class="btn btn-warning">
                Edit
              </Link>
              <button type="button" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
