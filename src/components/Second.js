import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import blast from "./yes.mp3";
import { useNavigate } from "react-router-dom";

const Second = () => {
  const nav = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    const timer2 = setTimeout(() => {
      nav("/third");
    }, 20000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [nav]);

  const [playSound] = useSound(blast);

  return (
    <div className="bg-black">
      <div
        className="h-dvh w-dvw bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url(https://media1.tenor.com/m/M9jJh24f3wsAAAAd/rose-open.gif)",
        }}
      >
        <h1 className="h-48 flex justify-center items-center text-white ">
          {" "}
          hey!! Shrutii Happy Rose Day and 2nd Year Anniversary
        </h1>
        <div className="flex justify-center items-center h-96">
          <button
            className={`text-green-700 px-2 ${showButton ? "block" : "hidden"}`}
            id="clickme"
            onClick={playSound}
          >
            click
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;
