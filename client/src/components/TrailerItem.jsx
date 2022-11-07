import React from "react";

const TrailerItem = ({ item }) => {
  return (
    <>
      <div className="movieListItem relative w-40 mr-2 hover:scale-150 hover:z-[999]">
        <img
          src={item.imgJumbotron}
          alt={item.title}
          className="rounded-md w-full hover:none"
        />
        <div className="movieListItemDetails flex flex-col justify-end opacity-0 top-40 absolute h-full bg-gradient-to-t from-sliderColor">
            <p className="text-[8px] font-light text-left pl-2">{item.title}</p>
            <p className="text-[8px] font-light text-left pl-2">{item.category} | {item.year} | {item.limit}</p>
            <p className="text-[8px] font-light text-left pl-2 leading-3">{item.desc.length > 10 ? item.desc.substring(0, 80) + "..." : item.desc}</p>
            <p className="text-[8px] font-light text-left pl-2">{item.duration}</p>
            <button className="bg-transparent rounded-sm mx-1 mb-1 p-1 hover:bg-white/20">
                <p className="font-light text-[10px] text-left">+ WATCHLIST</p>
            </button>
        </div>
      </div>
    </>
  );
};

export default TrailerItem;
