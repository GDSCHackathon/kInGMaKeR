import React from "react";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error-container">
      <p id="errorMessage">
        찾을 수 없는 페이지입니다. <br />
        요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요. :P
      </p>
      <span id="merong">:P</span>
      <img
        id="errorImage"
        src="https://user-images.githubusercontent.com/86648265/201472493-88360f7d-f1b9-4a32-a98b-4ba0e04604ac.png"
        alt=""
      />
    </div>
  );
};

export default Error;
