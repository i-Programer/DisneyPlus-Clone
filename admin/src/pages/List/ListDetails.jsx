import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { getMovies } from "../../context/movieContext/apiCalls";
import axios from "axios";
import { updateList } from "../../context/listContext/apiCalls";

const ListDetails = () => {
  const location = useLocation();
  const listId = location.state.listId;
  const [listDetails, setListDetails] = useState({});
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  const [updatedList, setUpdatedList] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedList({...updatedList, [e.target.name]: value});
    console.log(updatedList);
  }

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setUpdatedList({ ...updatedList,  [e.target.name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(listId, updatedList, dispatch);
  }

  useEffect(() => {
    const getListDetails = async () => {
      try {
        const res = await axios.get(`lists/find/${listId}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjVjNTFkMWI5NGYxZDFiNWJkY2FlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkxNTkyOCwiZXhwIjoxNjY0MzQ3OTI4fQ.Rg6qAsK2_taQtmSiYwq5MhpzmXx_ndPd9nfhaAUtY3w",
          },
        });
        setListDetails(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getListDetails();
  }, [listId]);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  return (
    <>
      <div className="list flex-[4] p-[20px]">
        <div className="listTitleContainer flex items-center justify-between">
          <h1 className="listTitle">Product</h1>
          <Link to="/newList">
            <button className="listAddButton w-[80px] border-none p-[5px] bg-blue-900 text-white rounded-md text-[16px] cursor-pointer">
              Create
            </button>
          </Link>
        </div>
        <div className="listTop flex">
          <div className="listTopRight flex-1 p-[20px] m-[20px]">
            <div className="listInfoTop flex items-center">
              <img
                src={listDetails.img}
                alt=""
                className="listInfoImg w-[40px] h-[40px] rounded-lg object-cover mr-[20px]"
              />
              <span className="listName font-semibold">
                {listDetails.title}
              </span>
            </div>
            <div className="listInfoBottom mt-[10px]">
              <div className="listInfoItem w-[150px] flex justify-between">
                <span className="listInfoKey">Id:</span>
                <span className="listInfoValue font-light">
                  {listDetails._id}
                </span>
              </div>
              <div className="listInfoItem w-[150px] flex">
                <span className="listInfoKey">Category:</span>
                <span className="listInfoValue font-light">
                  {listDetails.category}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="listBottom">
          <form className="listForm flex justify-between">
            <div className="listFormLeft flex flex-col">
              <label className="mb-[10px] text-gray-600">List Title</label>
              <input
                className="mb-[10px] border-none p-[5px] border-b-[1px] border-gray-600"
                type="text"
                name="title"
                placeholder={listDetails.title}
                onChange={handleChange}
              />
              <label className="mb-[10px] text-gray-600">Content</label>
              <select
                className="mb-[10px]"
                multiple
                name="content"
                onChange={handleSelect}
                style={{ height: "280px" }}
              >
                {movies.map((movie) => (
                  <option value={movie._id} key={movie._id}>
                    {movie.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="listFormRight flex flex-col justify-around">
              <div className="listUpload flex items-center">
                <img
                  src={listDetails.img}
                  alt=""
                  className="listUploadImg w-[100px] h-[100px] rounded-md object-cover"
                />
                <label htmlFor="file"></label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button
                onClick={handleSubmit}
                className="listButton border-none p-[5px] rounded-md bg-blue-900 text-white font-semibold cursor-pointer"
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

export default ListDetails;
