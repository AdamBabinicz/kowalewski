import React from "react";
import img from "../assets/2.png";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-3 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Linki</h6>
          <ul>
            <li className="py-1">
              <a
                href="https://pl.wikipedia.org/wiki/Jan_Kowalewski"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://niepodlegla.gov.pl/o-niepodleglej/jan-kowalewski-kryptolog-do-zadan-specjalnych"
                target="_blank"
                rel="noopener noreferrer"
              >
                Niepodległa
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://dzieje.pl/wiadomosci/55-lat-temu-zmarl-pplk-jan-kowalewski"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dzieje
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Filmy</h6>
          <ul>
            <li className="py-1">
              <a
                href="https://www.youtube.com/watch?v=zUGCLRH0ECM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Łamacz szyfrów
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.youtube.com/watch?v=44D-jvxJ7OA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ojciec
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.youtube.com/watch?v=gERWOmgwvFg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poczet
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Książki</h6>
          <ul>
            <li className="py-1">
              <a
                href="https://www.radiolodz.pl/posts/63318-juz-dzisiaj-prapremiera-sluchowiska-zagadka-jana-k"
                target="_blank"
                rel="noopener noreferrer"
              >
                Szyfry wojny
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Artykuły</h6>
          <ul>
            <li className="py-1">
              <a
                href="https://www.polskieradio.pl/39/156/Artykul/2565165,Jan-Kowalewski-Cichy-bohater-Bitwy-Warszawskiej"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cichy bohater
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.polskieradio.pl/39/156/Artykul/2565165,Jan-Kowalewski-Cichy-bohater-Bitwy-Warszawskiej"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cichy bohater
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://dzieje.pl/wiadomosci/prof-g-nowik-jan-kowalewski-o-rosji-wiedzial-wlasciwie-wszystko"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wywiad
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://niepodlegla.gov.pl/o-niepodleglej/kryptologia-w-ii-rp-od-rewolucji-do-enigmy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kryptologia
              </a>
            </li>
            <li className="py-1">
              <a
                href="https://www.polskieradio.pl/9/333/Artykul/2832436,Zagadka-Jana-K-na-Scenie-teatralnej-Trojki-POSLUCHAJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zagadka Jana K.
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2 w-full">
          <img src={img} alt="..." />
          {/* <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form> */}
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-col items-center text-center text-gray-500">
        <p className="py-4">Radom, 2022 - {new Date().getFullYear()}.</p>
        <div className="flex sm:flex-row justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaGoogle />
          <FaPinterest />
        </div>
      </div>
    </div>
  );
};

export default Footer;
