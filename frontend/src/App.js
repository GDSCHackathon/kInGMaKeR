import React from "react";
<<<<<<< HEAD
import Text from "./components/Yes.js";
import Text1 from "./components/no.js";
import Result from "./components/Result.js";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import QuestionPage from "./page/question/Question";
>>>>>>> c8cfd1fa98371d5fda435de89bbe7df1979e8282

function Router() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/yes" element={<Text />} />
        <Route path="/no" element={<Text1 />} />
        <Route path="/" element={<Result />} />
      </Routes>
    </BrowserRouter>
=======
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/qna" element={<QuestionPage />} />
          <Route path="/result" element={<div>결과</div>} />
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> c8cfd1fa98371d5fda435de89bbe7df1979e8282
  );
}

export default Router;
