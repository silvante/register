import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Login from "./components/Login";
import Singup from "./components/Singup";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Main />}>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Singup />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
