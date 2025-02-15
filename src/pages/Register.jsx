import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const {createNewUser,  setUser} = useContext(AuthContext)
  
  const handleSubmit = (e) =>{
       e.preventDefault();
      //  get data 
      const form = new FormData(e.target);
      const name = form.get('name');
      const email = form.get('email');
      // const photo = form.get('photo');
      const password = form.get('password');
      
      createNewUser(email,password)
      .then(result=>{
        // console.log("Result from createNewUser:", result);
       const user = result?.user;
       setUser(user)
       console.log(user)
      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
      
  
      
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-semibold text-center py-2">
          Register  your Account
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Name</label>
            <input name="name" type="text" className="input" placeholder="Name" />
            <label className="fieldset-label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Photo URL</label>
            <input name="photo" type="text" className="input" placeholder="photo_url" />
            <label className="fieldset-label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
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
