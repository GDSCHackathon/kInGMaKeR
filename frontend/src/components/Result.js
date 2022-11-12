import React from "react";
import { Link } from "react-router-dom";

function Result() {
  return (
    <div>
      <h1>닉네임 : ???</h1>
      <h2>맘에 드시나요?</h2>

      <Link class="yes" to="/yes">
        yes
      </Link>

      <Link class="no" to="/no">
        no
      </Link>
    </div>
  );
}

export default Result;
