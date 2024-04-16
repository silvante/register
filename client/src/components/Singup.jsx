import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Singup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function Registrate(e) {
    e.preventDefault();
    axios
      .post("http://localhost:2008/users", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl mb-5">register</h2>
      <form className="flex flex-col space-y-4 mb-5" onSubmit={Registrate}>
        <input
          type="text"
          className=" py-2 px-4 outline-none border-2 border-slate-400 w-72 rounded"
          placeholder="your name..."
          required
          onChange={(e) => setName(e.target.value)}
          min={4}
          max={40}
        />
        <input
          type="email"
          className=" py-2 px-4 outline-none border-2 border-slate-400 w-72 rounded"
          placeholder="your email..."
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className=" py-2 px-4 outline-none border-2 border-slate-400 w-72 rounded"
          placeholder="your password..."
          required
          min={6}
          max={24}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onSubmit={Registrate}
          type="submit"
          className="bg-base text-white py-2 rounded"
        >
          Sing up
        </button>
      </form>
      <p>alredy have an account ?</p>
      <Link to={"/login"} className="text-blue-800">
        Login...
      </Link>
    </div>
  );
};

export default Singup;
