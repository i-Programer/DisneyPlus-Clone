import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

let count = 0;
const MovieSlider = () => {
  const { t } = useTranslation();

  const slider = [
    {
      title: "Moana",
      alt: "moana",
      src: "/img/slider/Moana.png",
      category: "Kids",
      year: "2016",
      limit: "PG",
      desc: "The young girl uses her navigational talent to ship to a fairy tale island. His hero joins him on his adventure, the legendary demigod Maui.",
    },
    {
      title: "Doctor Strange in the Multiverse of Madness",
      alt: "doctorStrange",
      src: "/img/slider/DoctorStrangeintheMultiverseofMadness.png",
      category: "Supehero",
      year: "2022",
      limit: "PG",
      desc: "When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.",
    },
    {
      title: "Perception",
      alt: "perception",
      src: "/img/slider/Perception.png",
      category: "Kids",
      year: "2022",
      limit: "PG",
      desc: "Dr Daniel Pierce is a unique and eccentric neuroscience professor whose paranoid schizophrenia helps him solve crimes for the FBI.",
    },
  ];
  const [currentSlider, setCurrentSlider] = useState(0);
  const slideRef = useRef();

  const handleOnNextClick = () => {
    count = (count + 1) % slider.length;
    setCurrentSlider(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const movieLength = slider.length;
    count = (currentSlider + movieLength - 1) % movieLength;
    setCurrentSlider(count);
    slideRef.current.classList.add("fade-anim");
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationed", removeAnimation);
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 10000);
  };

  return (
    <>
      <div>
        <div ref={slideRef} className="w-full relative select-none bg-inherit">
          <div className="bg-sliderColor mx-auto lg:pl-10 md:mx-7 rounded-md">
            <div className="flex items-start xss:justify-center lg:justify-between relative">
              <div className="sliderInfo pt-10 bg-gradient-to-l from-sliderColor w-full hidden lg:block">
                <h1 className="text-3xl flex-initial font-semibold mr-5 sliderTitle text-left">
                  {slider[currentSlider].title}
                </h1>
                <h2 className="text-1xl flex-initial font-semibold mr-5 sliderTitle text-left">
                  {slider[currentSlider].year} |{" "}
                  {slider[currentSlider].category} |{" "}
                  {slider[currentSlider].limit}
                </h2>
                <h2 className="flex-initial font-semibold mr-5 sliderTitle text-left">
                {t(`Jumbotron.${slider[currentSlider].alt}`)}
                </h2>
              </div>
              <div className="imageGradient h-full absolute w-96 bg-gradient-to-r from-sliderColor hidden lg:block"></div>
              <img
                src={slider[currentSlider].src}
                alt={slider[currentSlider].title}
                className="rounded-md"
              />
            </div>
          </div>

          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            <button onClick={handleOnPrevClick}>
              <ArrowBackIosOutlined />
            </button>
            <button onClick={handleOnNextClick}>
              <ArrowForwardIosOutlined />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSlider;
