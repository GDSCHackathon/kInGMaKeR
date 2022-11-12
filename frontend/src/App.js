import React from "react";
import Text from "./components/Yes.js";
import Text1 from "./components/no.js";
import Result from "./components/Result.js";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/yes" element={<Text />} />
        <Route path="/no" element={<Text1 />} />
        <Route path="/" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
