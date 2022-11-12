import React from "react";
import "./Title.scss";
import { Link } from "react-router-dom";

function Title() {
  return (
    <div>
      <div>
        <Link to="/qna">
          <button id="startButton" onClick={() => console.log("다음 페이지")}>
            START
          </button>
        </Link>
      </div>
      <p id="title">kInGMaKeR</p>
    </div>
  );
}

export default Title;
