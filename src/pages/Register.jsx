import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-semibold text-center py-2">
          Register  your Account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="fieldset-label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Photo URL</label>
            <input type="text" className="input" placeholder="photo_url" />
            <label className="fieldset-label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
        <p className="text-center font-semibold pb-3 ">
          Already have an account ?{" "}
          <Link to="/auth/login" className="underline text-blue-400">
            Login
          </Link>{" "}
          !
        </p>
      </div>
    </div>
  );
};

export default Register;
