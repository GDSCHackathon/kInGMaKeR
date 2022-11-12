import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useConfetti from "../utils/useConfetti";

function Result() {
  const [nickname, setNickname] = useState("???");
  const [size, setSize] = useState(0);

  const navigate = useNavigate();

  useConfetti(size === 1);

  useEffect(() => {
    setSize((prev) => Math.min(prev + 1, 1));
  }, []);

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
          <h1 className="nickname">닉네임 : {nickname}</h1>
          <h2>맘에 드시나요?</h2>

          <span
            className="yes"
            onClick={() => {
              navigate("/yes", { replace: true });
            }}
          >
            yes
          </span>

          <span
            className="no"
            onClick={() => {
              navigate("/no", { replace: true });
            }}
          >
            no
          </span>
        </>
      )}
    </div>
  );
}

export default Result;
