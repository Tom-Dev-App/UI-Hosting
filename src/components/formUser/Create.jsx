import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Create = () => {
  return (
    <>
      <div className="container-fluid bg-primary min-vh-100">
        <div className="row">
          <div className="col-2 bg-white vh-100">
            <Sidebar />
          </div>
          <div className="col-8 p-5">
            <h1 className="text-white">Create User</h1>
            <form>
              <div>
                <label
                  for="exampleInputEmail1"
                  class="form-label mt-4 text-white">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label
                  for="exampleInputEmail1"
                  class="form-label mt-4 text-white">
                  Username
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label
                  for="exampleInputEmail1"
                  class="form-label mt-4 text-white">
                  Password
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label
                  for="exampleInputEmail1"
                  class="form-label mt-4 text-white">
                  Confirm Password
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="mt-5">
                <button type="submit" class="btn btn-success">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
