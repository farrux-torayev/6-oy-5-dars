import React from "react";
import Home from "../home";
import Admin from "../admin";
import { Route, Routes } from "react-router";
const Router = () => {
  return (
    <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Router;
