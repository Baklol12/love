import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  let nav = useNavigate();
  const handleclick = (e) => {
    e.preventDefault();
    nav("/second");
  };
  const handleclick2 = (e) => {
    e.preventDefault();
    alert('Badtameez aurat yes pe click kro')
  };
  return (
    <>
      <div className="h-dvh flex justify-center items-center">
        <div
          className="flex justify-center flex-col lg:px-56 lg:py-32 min-[300px]:py-24 min-[300px]:px-4 min-[300px]:space-y-2 bg-no-repeat bg-center bg-contain"
          style={{
            "backgroundImage":
              "url(https://media.tenor.com/Je68nyCU_j8AAAAj/bubu-dudu-bubu-dudu-love.gif)",
          }}
        >
          <p className="font-bold my-1 min-[300px]:text-md min-[550px]:text-lg">
            Heya!! My Dear Valentine!! Wanna Enter our world
          </p>
          <div className="flex justify-center space-x-2">
            <button
              className="overflow-hidden border border-blue-900 border-2 rounded-2xl text-blue-900 rounded-lg group bg-gradient-to-br hover:border-white font-semibold hover:from-white hover:to-blue-500 hover:text-white min-[300px]:w-[40px] min-[300px]:text-xs min-[550px]:text-lg min-[550px]:w-1/6"
              onClick={handleclick}
            >
              Yea
            </button>
            <button
              className="overflow-hidden border border-blue-900 border-2 rounded-2xl text-blue-900 rounded-lg group bg-gradient-to-br hover:border-white font-semibold hover:from-white hover:to-blue-500 hover:text-white min-[300px]:w-[40px] min-[300px]:text-xs min-[550px]:text-lg min-[550px]:w-1/6"
              onClick={handleclick2}
            >
              {" "}
              {/* <button className="w-2vw border border-blue-600 px-2 text-blue-600 rounded-3xl min-[300px]:w-[40px] min-[300px]:text-xs min-[550px]:text-lg min-[550px]:w-1/6"> */}
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
