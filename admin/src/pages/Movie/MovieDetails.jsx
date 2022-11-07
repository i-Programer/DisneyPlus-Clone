import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

const MovieDetails = () => {
  const location = useLocation();
  const movieId = location.state.movieId;
  const [movieDetails, setMovieDetails] = useState({});
  const { dispatch } = useContext(MovieContext);

  const [updatedMovie, setUpdatedMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const res = await axios.get(`movies/find/${movieId}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjVjNTFkMWI5NGYxZDFiNWJkY2FlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkxNTkyOCwiZXhwIjoxNjY0MzQ3OTI4fQ.Rg6qAsK2_taQtmSiYwq5MhpzmXx_ndPd9nfhaAUtY3w",
          },
        });
        setMovieDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedMovie({ ...updatedMovie, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movieId, updatedMovie, dispatch);
  };

  return (
    <>
      <div className="movie flex-[4] p-[20px]">
        <div className="movieTitleContainer flex items-center justify-between">
          <h1 className="movieTitle">Movie</h1>
          <Link to="/newMovie">
            <button className="movieAddButton w-[80px] border-none p-[5px] bg-blue-800 text-white rounded-md text-[16px] cursor-pointer">
              Create
            </button>
          </Link>
        </div>
        <div className="movieTop flex">
          <div className="movieTopRight flex-1 p-[20px] m-[20px]">
            <div className="movieInfoTop flex items-center">
              <img
                src={movieDetails.img}
                className="movieInfoImg w-[40px] h-[40px] rounded-[50%] object-cover mr-[20px]"
              />
              <span className="movieName font-semibold">
                {movieDetails.title}
              </span>
            </div>
            <div className="movieInfoBottom mt-[10px]">
              <div className="movieInfoItem w-[150px] flex">
                <span className="movieInfoKey">Id:</span>
                <span className="movieInfoValue font-light">
                  {movieDetails._id}
                </span>
              </div>
              <div className="movieInfoItem w-[150px] flex">
                <span className="movieInfoKey">Year:</span>
                <span className="movieInfoValue font-light">
                  {movieDetails.year}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="movieBottom p-[20px] m-[20]">
          <form className="movieForm flex justify-between">
            <div className="movieFormLeft flex flex-col">
              <label className="mb-[10px] text-gray-600">Movie Title</label>
              <input
                className="mb-[10px] border-none p-[5px] border-b-[1px] border-b-gray-600"
                type="text"
                placeholder={movieDetails.title}
                name="title"
                onChange={handleChange}
              />
              <label className="mb-[10px] text-gray-600">Category</label>
              <input
                className="mb-[10px] border-none p-[5px] border-b-[1px] border-b-gray-600"
                type="text"
                placeholder={movieDetails.category}
                name="category"
                onChange={handleChange}
              />
            </div>
            <div className="movieFormRight flex flex-col justify-arround">
              <div className="movieUpload flex items-center">
                <img
                  src={movieDetails.img}
                  alt={movieDetails.title}
                  className="movieUploadImg w-[100px] h-[100px] rounded-md object-cover mr-20px"
                />
                <label htmlFor="file"></label>
                <input type="file" id="file" className="hidden" />
              </div>
              <button
                onClick={handleSubmit}
                className="movieButton border-none p-[5px] rounded-md bg-blue-900 text-white font-semibold cursor-pointer"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
