import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { ListContext } from "../../context/listContext/ListContext"
import { MovieContext } from "../../context/movieContext/MovieContext"
import { getMovies} from "../../context/movieContext/apiCalls"
import { createList } from '../../context/listContext/apiCalls';

const CreateList = () => {
  const [list, setList] = useState(null);
  const history = useNavigate();

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  }

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history("/lists");
  }

  return (
    <>
      <div className="newList flex-[4]">
        <h1 className="addListTitle font-semibold text-lg ml-5 mt-2">New List</h1>
        <form className="addListForm mt-[10px] flex flex-wrap">
          <div className="formLeft">
            <div className="addListItem w-[250px] flex flex-col mb-[10px] p-[20px]">
              <label className="text-gray-600 font-semibold mb-[10px]">Title</label>
              <input className="p-[10px]" type="text" placeholder="Popular Movies" name="title" onChange={handleChange}/>
            </div>
            <div className="addListItem w-[250px] flex flex-col mb-[10px] p-[20px]">
              <label className="text-gray-600 font-semibold mb-[10px]">Category</label>
              <input className="p-[10px]" type="text" placeholder="Action" name="category" onChange={handleChange}/>
            </div>
            <div className="addListItem w-[250px] flex flex-col mb-[10px] p-[20px]">
              <label className="text-gray-600 font-semibold mb-[10px]">Type</label>
              <select className="p-[10px]" name="isSeries" onChange={handleChange}>
                <option>Type</option>
                <option value={`false`}>Movie</option>
                <option value={`true`}>Series</option>
              </select>
            </div>
            <div className="addListItem w-[250px] flex flex-col mb-[10px] p-[20px]">
              <label className="text-gray-600 font-semibold mb-[10px]">Content</label>
              <select className="p-[10px]"
                multiple
                name="content"
                onChange={handleSelect}
                style={{ height: "280px" }}
              >
                {movies.map((movie) => (
                  <option key={movie._id} value={movie._id}>
                    {movie.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="addListButton h-[30px] mt-10px py-[7px] px-[10px] border-none rounded-md bg-blue-900 text-white font-semibold cursor-pointer self-center" onClick={handleSubmit}>Create</button>
        </form>
      </div>
    </>
  )
}

export default CreateList