import React from "react";

import Text from "./components/Yes.js";
import Text1 from "./components/no.js";
import Result from "./components/Result.js";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Title from "./page/title/Title";
import QnA from "./components/QnA";
import Error from "./page/error/Error";
import QuestionPage from "./page/question/Question";

function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/qna" element={<QuestionPage />} />
          <Route path="/result" element={<Result />} />
          <Route path="/yes" element={<Text />} />
          <Route path="/no" element={<Text1 />} />
          <Route path="/" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
