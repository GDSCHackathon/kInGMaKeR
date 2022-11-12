import React from "react";
import "./Title.scss";
import { Link } from "react-router-dom";

function Title() {
  return (
    <div>
      {/* <span id="heesu">JUNG HEE SU</span>
      <span id="jinsu">KIM JIN SU</span>
      <span id="byungju">PARK BYUNG JU</span>
      <span id="dohoon">BAEK DO HOON</span> */}
      <div>
        <Link to="/error">
          <button id="startButton">S</button>
        </Link>
      </div>
      <p id="title">kInGMaKeR</p>
      <div class="imgHoverEvent event1">
        <div class="imgBox"></div>
        <div class="hoverBox">
          <Link to="/qna">시작하기</Link>
        </div>{" "}
        <Link to="/qna"></Link>
      </div>
    </div>
  );
}

export default Title;
