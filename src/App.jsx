import React from "react";
import Client from "./admin/AdminPanel";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";

const App = () => {

  return (
    <Routes>
      <Route
        path="/" element={<Home />} />
      <Route path="/admin-panel" element={<Client />} />
    </Routes>
  );
}

export default App