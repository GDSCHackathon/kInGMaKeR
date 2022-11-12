import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import QuestionPage from "./page/question/Question";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/qna" element={<QuestionPage />} />
          <Route path="/result" element={<div>결과</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
