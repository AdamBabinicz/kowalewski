import React, { useState } from "react";
import { Data } from "../variables/Data";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import "../styles/Carousel.css";

const Carousel = ({ slides }) => {
  const [slide, setSlide] = useState(0);
  const length = slides.length;
  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  return (
    <div className="carousel" id="galeria">
      <div className="arrows">
        <BiLeftArrow className="arrow-b" onClick={prevSlide} />
        <BiRightArrow className="arrow-f" onClick={nextSlide} />
      </div>
      {Data.map((item, index) => {
        return (
          <div>
            {index === slide && (
              <img src={item.img} alt="..." className="carousel-img" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
