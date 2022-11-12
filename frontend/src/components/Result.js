import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Result() {
  const [nickname, setNickname] = useState("???");

  const getNickname = () => {
    fetch("http://192.168.124.41:8080/result")
      .then((res) => res.json())
      .then((data) => setNickname((nickname) => data.result))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getNickname();
  }, []);

  return (
    <div>
      {nickname !== "???" && (
        <>
          <h1>닉네임 : {nickname}</h1>
          <h2>맘에 드시나요?</h2>

          <Link className="yes" to="/yes">
            yes
          </Link>

          <Link className="no" to="/no">
            no
          </Link>
        </>
      )}
    </div>
  );
}

export default Result;
