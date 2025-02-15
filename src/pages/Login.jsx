import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {userLogin, setUser} = useContext(AuthContext)
  const [error, setError] = useState({})
  const location = useLocation();
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({email, password})
    userLogin(email, password)
    .then(result=>{
      const user = result?.user;
      setUser(user)
      navigate(location?.state ? location.state : '/')
    })
    .catch((err) =>{
      setError({...error, login:err.code})
    })
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-semibold text-center py-2">Login your Account</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div>
             <div>
             {
                error.login &&  (<label className="label text-sm text-red-600">{error.login}</label>)
              }
             </div>
             <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
             </label>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center font-semibold pb-3 ">Don't have an account ? <Link to='/auth/register' className="underline text-blue-400">Register</Link> !</p>
      </div>
    </div>
  );
};

export default Login;
