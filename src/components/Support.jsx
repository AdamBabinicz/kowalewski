import React from "react";
import supportImg from "../assets/5.png";
import {
  AnnotationIcon,
  ArchiveIcon,
  ArrowSmRightIcon,
} from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="..."
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-xl pt-8 text-slate-300 uppercase text-center">
            Szef biura szyfrów
          </h2>
          <h3 className="text-2xl font-bold py-6 text-center">Wydział II</h3>
          <p className="py-4 text-xl text-slate-300">
            Do końca wojny polski radiowywiad złamał ponad 100 sowieckich kluczy
            szyfrowych, oraz odczytał ponad 3000 szyfrogramów. W najbardziej
            gorącym okresie wojny Polski z bolszewicką Rosją, w lipcu i sierpniu
            1920 roku, odczytywano ich ok. 400–500 miesięcznie, tj. kilkanaście
            dziennie. Dawały one podstawę do podejmowania racjonalnych decyzji
            strategicznych, operacyjnych i politycznych oraz pozwalało do
            pewnego stopnia niwelować ogromną przewagą Armii Czerwonej w
            zakresie liczebności i uzbrojenia.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <AnnotationIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">x</h3>
              <p className="text-gray-600 text-xl">
                "W deszyfracji pomogły mi dwie rzeczy – słowo »dywizja«, które w
                języku rosyjskim zawiera w trzech kolejnych (dwuliterowych)
                sylabach – trzy razy literę »i« [дивизия] oraz to, że nagłówki
                depesz były pisane raz szyfrem, raz jawnym tekstem" – wyjaśniał
                Kowalewski na antenie Radia Wolna Europa.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Kontakt <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ArchiveIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">y</h3>
              <p className="text-gray-600 text-xl">
                Odpowiednią sekwencję znaków Kowalewski odnalazł przesuwając
                grzebieniem z wyłamanymi zębami po tekście depeszy. Tę metodę
                dekryptażu Kowalewski zaczerpnął z noweli Edgara Alana Poe
                "Złoty żuk". W podobny sposób główny bohater opowiadania łamie
                szyfr zastosowany przez pirackiego kapitana w celu ukrycia
                skarbu.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Kontakt <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">z</h3>
              <p className="text-gray-600 text-xl">
                Do pomocy ściągnął grupę świetnych matematyków z Uniwersytetu
                Lwowskiego i Warszawskiego: Stanisława Leśniewskiego, Stefana
                Mazurkiewicza i Wacława Sierpińskiego (ten ostatni przez pewien
                czas pracował w Moskwie, co było dodatkowym atutem uczonego –
                znał doskonale język rosyjski).
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Kontakt <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
