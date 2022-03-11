import React from "react";
import bgImg from "../assets/1.jpeg";
import {
  AtSymbolIcon,
  LockClosedIcon,
  TranslateIcon,
  VariableIcon,
} from "@heroicons/react/outline";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between overflow-x-hidden"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-xl sm:text-base">
            złamał sowieckie szyfry w czasie wojny z bolszewikami, oficer
            Oddziału II Sztabu Głównego
          </p>
          <h1 className="py-3 text-3xl md:text-6xl sm:text-2xl font-bold">
            Jan Kowalewski
          </h1>
          <h2 className="text-2xl sm:text-xl">pogromca czerwonoarmistów</h2>
          <button className="py-3 px-6 sm:w-[60%] my-4">Czytaj</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="..." />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] 
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            opacity-[.67] border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p className="text-xl mb-5 md:text-2xl sm:text-xl">
            Podpułkownik dyplomowany piechoty Wojska Polskiego
          </p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-neutral-800">
              <VariableIcon className="h-6 text-indigo-600" />
              matematyk
            </p>
            <p className="flex px-4 py-2 text-neutral-800">
              <TranslateIcon className="h-6 text-indigo-600" />
              poliglota
            </p>
            <p className="flex px-4 py-2 text-neutral-800">
              <LockClosedIcon className="h-6 text-indigo-600" />
              kryptolog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
