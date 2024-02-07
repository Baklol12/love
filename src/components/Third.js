import React from "react";
import { Link } from "react-router-dom";

const Third = () => {
  return (
    <div
      className="h-dvh flex justify-center items-center"
      style={{
        backgroundImage:
          "url(https://media.tenor.com/Je68nyCU_j8AAAAj/bubu-dudu-bubu-dudu-love.gif)",
      }}
    >
      <Link
        to="https://www.youtube.com/watch?v=2Vv-BfVoq4g"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
          src="https://static1.squarespace.com/static/5f8b7e818377c20fff18c3d2/5f8f7ba8eb3af61caacbeadd/5ff8ca1602df0e5b2df479ce/1610140223711/hey-valentine-greeting-card-mockup.jpg?format=1500w"
          alt=""
          id='adwad'
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            A Small Cute Paragraph For U
          </h5>
          <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
            hey our monthiversary is incomplete without these paragraphs and uk
            i am an expert in these because your incoming in my life helped me
            in having many stories it's really special monthiversary i want to
            do a lot more than this but sorry i couldnt but uk something thanks
            for everything i literally felt incomplete without u you really are
            kinda colour to my life thank you for ur existence my dear gugu
            sweetu i finished my year 2023 with u and want to finish every year
            with u and u only i love u a lot uk it though i know it too and i
            even know u too love me bs ye h bologi nhi btw ek gift or h joh shyd
            aaj hi banadoon mehnt lagegi but shyd keep checking my old gifts btw
            sorry ik agar paisa hota to bhot acha gift de paata and thank u my
            love my sweetuu.Mujhe pta h m bhot slow hoon but bs tumhara hoon
            jaisa bhi hoon Click The Box By The way
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Third;
