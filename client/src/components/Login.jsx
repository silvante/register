import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl mb-5">login form</h2>
      <form className="flex flex-col space-y-4 mb-5">
        <input
          type="email"
          className=" py-2 px-4 outline-none border-2 border-slate-400 w-72 rounded"
          placeholder="your email..."
          required
        />
        <input
          type="password"
          className=" py-2 px-4 outline-none border-2 border-slate-400 w-72 rounded"
          placeholder="your password..."
          required
        />
        <button type="submit" className="bg-base text-white py-2 rounded">
          Log in
        </button>
      </form>
      <p>need to open an account ?</p>
      <Link to={"/register"} className="text-blue-800">
        registrate...
      </Link>
    </div>
  );
};

export default Login;
