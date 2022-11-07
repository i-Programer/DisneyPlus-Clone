import React from "react";
import { Link, useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const searchWord = location.state.searchWord;
  const searchData = location.state.searchData;

  return (
    <>
      <div className="mx-auto p-5 text-left">
        <span className="text-2xl font-semibold text-slate-600">
          Showing all result for{" "}
          <span className="italic text-white">{searchWord}</span>
        </span>
        <ul className="grid grid-cols-5">
          {searchData.map((data, i) => (
            <Link to="/watch" state={{ movie: data }}>
              <div className="movieListItem relative mr-2 hover:scale-100 hover:z-[999] mb-3 w-[15rem] rounded-md">
                <img src="img/slider/Moana.png" alt={data.title} />
                <div className="movieListItemDetails flex flex-col justify-end opacity-0 top-40 absolute h-full bg-gradient-to-t from-sliderColor">
                  <p className="text-[10px] font-semibold text-left pl-2">
                    {data.title}
                  </p>
                  <p className="text-[10px] font-semibold text-left pl-2">
                    {data.year} | {data.category} | {data.limit}
                  </p>
                  <p className="text-[10px] font-semibold text-left pl-2">
                    {data.desc}
                  </p>

                  <p className="text-[10px] font-medium text-left pl-2">
                    {data.duration}
                  </p>

                  <button className="bg-transparent rounded-sm mx-1 mb-1 mt-2 p-1 hover:bg-white/20 z-[1000]">
                    <p className="font-normal text-[15px] text-left">
                      + WATCHLIST
                    </p>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
