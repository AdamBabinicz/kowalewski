import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Życiorys</h2>
          <p className="text-xl text-left py-6 sm:mx-7 text-gray-500">
            Urodził się 24 października 1892. Syn Józefa i Zdzisławy z
            Kowalskich. Ukończył Szkołę Handlową Zgromadzenia Kupców w Łodzi. W
            latach 1909–1912 studiował na Uniwersytecie w Liège, otrzymując
            półdyplom z chemii technicznej. Po studiach wrócił do Łodzi, a
            praktyki zawodowe odbywał w fabrykach chemicznych w Zgierzu. Jeszcze
            przed wybuchem wojny został zatrudniony na stanowisku inżyniera w
            Białej Cerkwi na Ukrainie. Znał kilka języków obcych: niemiecki,
            francuski i rosyjski. Po wybuchu I wojny światowej zmobilizowany do
            armii rosyjskiej i skierowany do szkoły oficerskiej w Kijowie. Po
            ukończeniu szkoły w stopniu chorążego przydzielony do zapasowego
            pułku w Teodozji. Uczestniczył w walkach na froncie rumuńskim, w
            Bukowinie i Mołdawii, gdzie został ranny. W 1917 awansował na
            stopień podporucznika.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Krzyż Srebrny Orderu Virtuti Militari
            </p>
            <p className="text-gray-400 mt-2">1922</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Krzyż Wielki Orderu Odrodzenia Polski
            </p>
            <p className="text-gray-400 mt-2">pośmiertnie, 4 lipca 2012</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Krzyż Niepodległości z Mieczami
            </p>
            <p className="text-gray-400 mt-2">17 marca 1932</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Krzyż Oficerski Orderu Odrodzenia Polski
            </p>
            <p className="text-gray-400 mt-2">1930</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Krzyż Walecznych trzykrotnie
            </p>
            <p className="text-gray-400 mt-2">po raz pierwszy w 1921</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Złoty Krzyż Zasługi
            </p>
            <p className="text-gray-400 mt-2">18 marca 1933</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Śląski Krzyż Walecznych
            </p>
            <p className="text-gray-400 mt-2">?</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Odznaka „Znak Pancerny”
            </p>
            <p className="text-gray-400 mt-2">?</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Order Wschodzącego Słońca V klasy
            </p>
            <p className="text-gray-400 mt-2">Japonia, 1926</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Krzyż Komandorski Orderu Korony Rumunii (Rumunia)
            </p>
            <p className="text-gray-400 mt-2">?</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Krzyż Oficerski Orderu Korony Rumunii (Rumunia)
            </p>
            <p className="text-gray-400 mt-2">?</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-xl font-bold text-indigo-600">
              Order Palm Akademickich (Francja)
            </p>
            <p className="text-gray-400 mt-2">?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
