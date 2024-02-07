import React, { useEffect } from "react";
import useSound from "use-sound";
import blast from "./yes.mp3";
import { useNavigate } from "react-router-dom";

const Second = () => {
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("clickme").style.display = "block";
    }, 4000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
        // eslint-disable-next-line
      nav("/third");
    }, 20000);
  }, []);

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
          hey!! Siddhu Happy Rose Day and 6th Montiversary
        </h1>
        <div className="flex justify-center items-center h-96">
          <button
            className="text-green-700 px-2 hidden"
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
