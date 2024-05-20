import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div class="row justify-content-center w-100">
        <div class="col-12 col-sm-8 col-md-6">
          <form class="form mt-5" action="" method="post">
            <h3 class="text-center text-dark">Login</h3>
            <div class="form-group mt-3">
              <label for="email" class="text-dark">
                Email:
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
              />
            </div>
            <div class="form-group mt-3">
              <label for="password" class="text-dark">
                Password:
              </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="remember-me" class="text-dark"></label>
              <br />
              <input
                type="submit"
                name="submit"
                class="btn btn-dark btn-md"
                value="submit"
              />
            </div>
            <div class="text-right mt-2">
              <a href="#" class="text-dark">
                Register here
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
