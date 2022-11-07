import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useRef } from "react";
import MovieListItem from "./MovieListItem";

const MovieList = ({ lists }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [clickLimit, setClickLimit] = useState(0);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 20;
    if(direction === "left" && clickLimit >= 1) {
      setSlideNumber(slideNumber - 1);
      setClickLimit(clickLimit - 1);
      listRef.current.style.transform = `translateX(${1184 + distance}px)`
    }
    if(direction === "right" && clickLimit <= 2 - 1) {
      setSlideNumber(slideNumber + 1);
      setClickLimit(clickLimit + 1);
      listRef.current.style.transform = `translateX(${-1184 + distance}px)`
    }
  }

  return (
    <>
      <div className="flex flex-col listContainer my-5 relative mb-10">
        <h1 className="text-2xl font-semibold text-left ml-5">{lists.title}</h1>
        <button className="movieListNavigation absolute left bg-gradient-to-r from-sliderColor lg:block hidden" style={{ display: !isMoved && "none" }} onClick={() => handleClick("left")}>
          <ArrowBackIosOutlined />
        </button>
        <button className="movieListNavigation absolute right bg-gradient-to-l  from-sliderColor lg:block hidden" onClick={() => handleClick("right")}>
          <ArrowForwardIosOutlined />
        </button>
        <div className="movieContainer flex flex-nowrap ml-5 w-[95rem]" style={{ width: '200rem' }} ref={listRef}>
          {lists.content.map((item, i) => (
            <MovieListItem item={item} key={i}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
