import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import QnA from "./components/QnA";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />}></Route>
          <Route path="/QnA" element={<QnA />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
