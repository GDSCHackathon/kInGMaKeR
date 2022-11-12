import React from "react";
import "./Title.scss";
import { Link } from "react-router-dom";

function Title() {
  return (
    <div>
      <div>
        <Link to="/error">
          <button id="startButton">{">"}</button>
        </Link>
      </div>
      <p id="title">
        <span>k</span>
        <span>I</span>
        <span>n</span>
        <span>G</span>
        <span>M</span>
        <span>a</span>
        <span>K</span>
        <span>e</span>
        <span>R</span>
      </p>
      <div class="imgHoverEvent event1">
        <div class="imgBox"></div>
        <div class="hoverBox">
          <span class="text">BAEK DO HOON</span>
        </div>
      </div>
      <div class="imgHoverEvent event1">
        <div class="imgBox"></div>
        <div class="hoverBox">
          <span class="text">PARK BYUNG JU</span>
        </div>
      </div>
      <div class="imgHoverEvent event1">
        <div class="imgBox"></div>
        <div class="hoverBox">
          <Link to="/qna">시작하기</Link>
        </div>{" "}
        <Link to="/qna"></Link>
      </div>
      <div class="imgHoverEvent event1">
        <div class="imgBox"></div>
        <div class="hoverBox">
          <span class="text">KIM JIN SU</span>
        </div>
      </div>
      <div class="imgHoverEvent event1">
        <div class="imgBox"></div>
        <div class="hoverBox">
          <span class="text">JUNG HEE SU</span>
        </div>
      </div>
    </div>
  );
}

export default Title;
