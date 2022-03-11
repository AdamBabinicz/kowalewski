import React from "react";
import { CheckIcon, ShareIcon } from "@heroicons/react/outline";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-2xl font-bold text-center">
          Jeden z największych kryptografów w dziejach polskiego wywiadu
        </h2>
        <p className="text-xl py-8 text-gray-500 text-center">
          Był współautorem polskich zwycięstw w Bitwie Warszawskiej i Operacji
          Niemeńskiej. Stanowił wzór dla kolejnego pokolenia polskich
          specjalistów, którzy złamali Enigmę. Senat RP ustanowił 2020 r. Rokiem
          Jana Kowalewskiego jako „uhonorowanie jego zasług, a tym samym
          osiągnięć polskiej nauki i myśli technicznej”.
        </p>
        <em className="mt-6">
          dzieje.pl/wiadomosci/55-lat-temu-zmarl-pplk-jan-kowalewski
        </em>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <ShareIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">...</h3>
              <p className="text-lg pt-2 pb-4">
                I wojna światowa udowodniła, jak wielką rolę na nowoczesnym polu
                walki odgrywa łączność. Zdolność do niemal natychmiastowego
                przekazywania informacji do oddziałów oddalonych od dowództwa
                fascynowała teoretyków wojskowości.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <ShareIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">...</h3>
              <p className="text-lg pt-2 pb-4">
                Przebieg pierwszych batalii wielkiej wojny pokazał również, że
                podsłuchiwanie rozkazów i meldunków przeciwnika wysyłanych w
                eter daje możliwość wyprzedzania jego ruchów.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <ShareIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">...</h3>
              <p className="text-lg pt-2 pb-4">
                W 1914 r. Rosjanie nadawali rozkazy otwartym tekstem lub
                stosując bardzo proste szyfry. Jak zauważył jeden z niemieckich
                generałów, dawało to jego armii ogromną przewagę i sprawiało, że
                wojna na wschodzie miała dla Niemiec „uproszczony charakter”.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <ShareIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">...</h3>
              <p className="text-lg pt-2 pb-4">
                Tuż po odzyskaniu niepodległości w polskim Sztabie Generalnym
                zdecydowano, że tworząc polską łączność radiową i radiowywiad,
                należy wzorować się na niemieckiej organizacji tych jednostek.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <ShareIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">...</h3>
              <p className="text-lg pt-2 pb-4">
                Jednym z wyjątków był były porucznik armii rosyjskiej Jan
                Kowalewski. Wiosną 1919 r. został przydzielony do tworzonej od
                kilku miesięcy Sekcji Szyfrowej w Oddziale II Sztabu Generalnego
                Wojska Polskiego. Trafił tam dzięki rekomendacji znanego później
                mjr. Ignacego Matuszewskiego.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <ShareIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">...</h3>
              <p className="text-lg pt-2 pb-4">
                Złamanie sowieckich szyfrów pozwoliło nie tylko na przewidzenie
                przyszłych działań bolszewików, lecz i miejsc koncentracji ich
                jednostek. Część sowieckich meldunków dotyczyła też nastrojów w
                szeregach Armii Czerwonej.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <ShareIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">...</h3>
              <p className="text-lg pt-2 pb-4">
                W styczniu 1920 r. po raz pierwszy udało się wykorzystać
                przechwycone rozkazy Armii Czerwonej do podjęcia działań
                ofensywnych. Szybka mobilizacja polskich sił nad rzeką Ptycz na
                Białorusi pozwoliła na przeprowadzenie skutecznego ataku.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <ShareIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">...</h3>
              <p className="text-lg pt-2 pb-4">
                Wątek udziału polskiego radiowywiadu w zwycięstwach roku 1920,
                ze zrozumiałych względów, nie pojawiał się w wydawanych w
                dwudziestoleciu międzywojennym opracowaniach historii wojny i
                wspomnieniach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
