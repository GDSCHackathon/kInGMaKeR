import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Text from "./components/Yes.js";
import Text1 from "./components/no.js";
import Result from "./components/Result.js";
import Title from "./page/title/Title";
import QuestionPage from "./page/question/Question";
import Error from "./page/error/Error.js";
import "./App.scss";

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
          <Route path="error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
