import { Facebook, Link, PlayArrow, ShareOutlined, Twitter } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import TrailerList from "../components/TrailerList";

const Watch = () => {
  const location = useLocation();
  const movie = location.state.movie;

  const [clicked, setClicked] = useState(false);
  // console.log(location);

  const trailer = {
    title: "Trailer",
    listItem: [
      {
        title: "Moana - Trailer",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorum magnam nostrum pariatur molestias quas earum similique porro at eum",
        img:"/img/slider/Moana.png",
        duration: "1 hr 25 min",
        year: "2016",
        category: "Kids",
        limit: "PG"
      },
    ]
  }

  return (
    <>
      <div className="w-full relative">
        {clicked ? (
          <>
            <video
              className="video w-full"
              autoPlay
              progress="true"
              controls
              src="video/movie/Moana Official Trailer.mp4"
            />
            <div className="bg-sliderColor h-full px-7 py-7">
              <div>
                <span className="text-3xl font-bold">{movie.title}</span>
                <br />
                <span className="text-3xl font-bold">
                  {movie.year} | {movie.category} | {movie.limit}
                </span>
                <br />
                <span className="text-3xl font-bold">{movie.desc}</span>
                <br />
                <div className="text-left pt-5">
                  <button className="font-sm text-sm mr-5 uppercase">
                    + WATCHLIST
                  </button>
                  <button className="font-sm text-sm uppercase">
                    <ShareOutlined /> Share
                  </button>
                </div>
              </div>
              <hr className="mt-6" />
            </div>
          </>
        ) : (
          <>
            <div className="lg:mx-7 lg:rounded-md">
              <div className="bg-sliderColor lg:pl-10 flex items-start md:justify-center llg:justify-between relative rounded-md">
                <div className="h-full sliderInfo pt-10 pb-10 bg-gradient-to-l from-sliderColor w-full lg:block hidden">
                  <div>
                    <h1 className="text-3xl flex-initial font-semibold mr-5 sliderTitle text-left">
                      {movie.title}
                    </h1>
                    <h2 className="text-1xl flex-initial font-semibold mr-5 sliderTitle text-left mb-3">
                      {movie.duration} | {movie.category} | {movie.limit}
                    </h2>
                    <h2 className="flex-initial font-semibold mr-5 sliderTitle text-left mb-3">
                      {movie.desc}
                    </h2>
                  </div>
                  <div className="text-left mb-5">
                    <button className="mr-5 text-2xl font-bold">
                      <PlayArrow /> Watch
                    </button>
                    <button className="font-sm text-sm uppercase">
                      <ShareOutlined /> Share
                    </button>
                  </div>
                </div>
                <div className="imageGradient h-full absolute w-96 bg-gradient-to-r from-sliderColor hidden lg:block"></div>
                <img
                  className="flex-initial rounded-md"
                  src="img/slider/Moana.png"
                  alt={movie.title}
                />
                <button className="mr-5 lg:hidden block absolute xs:left-[2rem] xss:bottom-2 xss:left-0">
                  <PlayArrow /> Watch
                </button>
              </div>

              <div className="mt-2 mx-2 border-b-[1px] flex">
                <span className="text-left left-0 font-medium text-base">
                  Available In: &nbsp;
                  <button className="text-sm p-2 focus:bg-gray-400 rounded-lg my-1">
                    Indonesia
                  </button>
                  &nbsp;
                  <button className="text-sm p-2 focus:bg-gray-400 rounded-lg my-1">
                    English
                  </button>
                </span>
              </div>
            </div>

            <div className="mx-2 mt-2">
              <div className="md:block lg:hidden">
                <h1 className="text-3xl flex-initial font-semibold mr-5 sliderTitle text-left">
                  {movie.title}
                </h1>
                <h2 className="text-1xl flex-initial font-semibold mr-5 sliderTitle text-left mb-3">
                  {movie.duration} | {movie.category} | {movie.limit}
                </h2>
                <h2 className="flex-initial font-semibold mr-5 sliderTitle text-left mb-3">
                  {movie.desc}
                </h2>
              </div>
              <div className="text-left pt-3 block lg:hidden">
                <button className="mr-3">+</button>
                <button className="mr-3"><Facebook/></button>
                <button className="mr-3"><Twitter/></button>
                <button><Link/></button>
              </div>
            </div>
          </>
        )}
      </div>

      <TrailerList movie={movie}/>
    </>
  );
};

export default Watch;
