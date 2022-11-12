import React from "react";
import "./Title.scss";
import { Link } from "react-router-dom";

function Title() {
  return (
    <div>
      <div>
        <Link to="Error">
          <button id="startButton" onClick={() => console.log("다음 페이지")}>
            S
          </button>
        </Link>
      </div>
      <p id="title">kInGMaKeR</p>
      <div class="imgHoverEvent event1">
        <div class="imgBox"></div>
        <div class="hoverBox">
          <Link to="QnA">시작하기</Link>
        </div>{" "}
        <Link to="/QnA"></Link>
      </div>
    </div>
  );
}

export default Title;
