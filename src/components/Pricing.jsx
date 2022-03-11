import React from "react";
import { QrcodeIcon } from "@heroicons/react/outline";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-xl uppercase">Awanse</h2>
          <h3 className="text-2xl font-bold text-white py-8 sm:text-xl">
            Prezydent RP Andrzej Duda na wniosek Ministra Obrony Narodowej 22
            września 2020 mianował Jana Kowalewskiego pośmiertnie na stopień
            generała brygady
          </h3>
          <p className="text-xl">
            30 czerwca 2020 Poczta Polska upamiętniła go na znaczku pocztowym
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative flex justify-around flex-col">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm"></span>
            <div>
              {/* <p className="text-6xl font-bold py-4 flex">
                $49
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p> */}
            </div>
            <p className="text-xl py-8 text-slate-500">
              Uchwałą z 17 października 2019 Senat RP IX kadencji zdecydował o
              ustanowieniu roku 2020 Rokiem Jana Kowalewskiego.
            </p>
            <div className="text-xl">
              <p className="flex flex-col items-center py-4">
                <QrcodeIcon className="w-8 mr-5 text-green-600" />
                chorąży – 1 stycznia 1916 r.
              </p>
              <p className="flex flex-col items-center py-4">
                <QrcodeIcon className="w-8 mr-5 text-green-600" />
                podporucznik – 1917
              </p>
              <p className="flex flex-col items-center py-4">
                <QrcodeIcon className="w-8 mr-5 text-green-600" />
                porucznik – 15 lipca 1918 r.
              </p>
              <p className="flex flex-col items-center py-4">
                <QrcodeIcon className="w-8 mr-5 text-green-600" />
                kapitan – 1 czerwca 1919 r.
              </p>
              {/* <p className="flex py-4">
                <QrcodeIcon className="w-8 mr-5 text-green-600" />
                Najważniejsze aspekty pracy informacyjnej attaché wojskowego
                przy Poselstwie RP w Moskwie na przykładzie działań ppłk. Jana
                Kowalewskiego w stolicy ZSRR.
              </p> */}
              <button className="w-full py-4 my-4">Więcej</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative flex justify-around flex-col">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm"></span>
            <div>
              {/* <p className="text-6xl font-bold py-4 flex">
                $99
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p> */}
            </div>
            <p className="text-xl py-8 text-slate-500">
              14 sierpnia 2020 również Sejm uhonorował Kowalewskiego
              okolicznościową uchwałą.
            </p>
            <div className="text-xl">
              <p className="flex flex-col items-center py-4">
                <QrcodeIcon className="w-8 mr-5 text-green-600" />
                major – 31 marca 1924 r. ze starszeństwem z 1 lipca 1923 r. i 71
                lokatą w korpusie oficerów piechoty
              </p>
              <p className="flex flex-col items-center py-4">
                <QrcodeIcon className="w-8 mr-5 text-green-600" />
                podpułkownik – ze starszeństwem z 1 stycznia 1931 r. w korpusie
                oficerów piechoty
              </p>
              <p className="flex flex-col items-center py-4">
                <QrcodeIcon className="w-8 mr-5 text-green-600" />
                pułkownik – nadany prawdopodobnie na emigracji
              </p>
              <p className="flex flex-col items-center py-4">
                <QrcodeIcon className="w-8 mr-5 text-green-600" />
                generał brygady – nadany pośmiertnie 22 września 2020
              </p>
              {/* <p className="flex py-4">
                <QrcodeIcon className="w-8 mr-5 text-green-600" />
                Kontakty ppłk. dypl. Jana Kowalewskiego z Sowietami i Niemcami w
                czasie II wojny światowej.
              </p> */}
              <button className="w-full py-4 my-4">Więcej</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

// https://ipn.gov.pl/pl/aktualnosci/153302,Ogolnopolska-konferencja-naukowa-Pplk-dypl-Jan-Kowalewski-18921965-oficer-wywiad.html
