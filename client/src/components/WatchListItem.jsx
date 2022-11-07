import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { createWatchlist } from "../context/watchlistContext/apiCalls";
import { useContext } from "react";
import { WatchlistContext } from "../context/watchlistContext/WatchlistContext";
import { AuthContext } from "../context/authContext/AuthContext";

const WatchListItem = ({ item }) => {
  const [movie, setMovie] = useState({});
  const { dispatch } = useContext(WatchlistContext);
  const { user } = useContext(AuthContext);
  // console.log(item);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`/movies/find/${item}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjVjNTFkMWI5NGYxZDFiNWJkY2FlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkxNTkyOCwiZXhwIjoxNjY0MzQ3OTI4fQ.Rg6qAsK2_taQtmSiYwq5MhpzmXx_ndPd9nfhaAUtY3w"
          }
        });
        setMovie(res.data);
        // console.log(movie);
      } catch(err){
        console.log(err);
      }
    }
    getMovie();
  }, [item]);

  const handleWatchlist = async () => {
    if (user) {
      createWatchlist({movieId: movie._id, userId: user._id}, dispatch)
    }
  }

  return (
    <div className="movieListItem relative w-40 mr-2 hover:scale-150 hover:z-[999] rounded-md">
      {/* <Link to="/watch" state={{ movie: movie }}> */}
        <img src={movie.img} alt={movie.title} />
        <div className="movieListItemDetails flex flex-col justify-end opacity-0 top-40 absolute h-full bg-gradient-to-t from-sliderColor">
          <p className="text-[8px] font-light text-left pl-2">{movie.title}</p>
          <p className="text-[8px] font-light text-left pl-2">
            {movie.year} | {movie.category} | {movie.limit}
          </p>
          <p className="text-[8px] font-light text-left pl-2 leading-3">{movie.desc && movie.desc.length > 10 ? movie.desc.substring(0, 80) + "..." : movie.desc}</p>

          <p className="text-[8px] font-normal text-left pl-2">{movie.duration}</p>

          <button className="bg-transparent rounded-sm mx-1 mb-1 p-1 hover:bg-white/20 z-[1000]" onClick={() => handleWatchlist()}>
            <p className="font-light text-[10px] text-left">+ WATCHLIST</p>
          </button>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default WatchListItem;
