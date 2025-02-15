import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const [error,setError] = useState({})
  const navigate = useNavigate();
  const {createNewUser,  setUser, updateUserProfile} = useContext(AuthContext)
  
  const handleSubmit = (e) =>{
       e.preventDefault();
      //  get data 
      const form = new FormData(e.target);
      const name = form.get('name');
      const email = form.get('email');
      const photo = form.get('photo')
      // const photo = form.get('photo');
      const password = form.get('password');
      if(password.length < 6){
        setError({...error, password : 'password must be more than 6 character long'})
        return;
      }
      createNewUser(email,password,photo)
      .then(result=>{
       
       const user = result?.user;
       setUser(user)
       navigate(location?.state ? location.state : '/')
       updateUserProfile({displayName : name, photoURL : photo}).then(()=>{navigate('/')}).catch(err =>{console.log(err)})
      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message
        
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
            {
              error.password && (<label className="label text-xs text-red-500">{error.password}</label>)
            }
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
