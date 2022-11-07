import React, { useContext, useEffect, useState } from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

const Movies = () => {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);
  // console.log(movies);
  
  const handleDelete = (id) => {
    deleteMovie(id, dispatch)
  };

  const contextMenuItems = [
    "AutoFit",
    "AutoFitAll",
    "SortAscending",
    "SortDescending",
    "FirstPage",
    "PrevPage",
    "LastPage",
    "NextPage",
  ];

  const movieImage = (props) => {
    return (
      <div>
        <img
          className="rounded-xl h-20 md:ml-3"
          src={props.img}
          alt="order-item"
        />
      </div>
    );
  };

  const actionButton = (props) => {
    return (
      <>
        <Link
          to="/movie"
          state={{ movieId: props._id }}
          className="bg-yellow-300 rounded-md p-2 text-white mr-3"
        >
          Edit
        </Link>{" "}
        <button
          className="bg-red-700 rounded-md p-2 text-white mr-3"
          onClick={() => handleDelete(props._id)}
        >
          Delete
        </button>
      </>
    );
  };

  const movieGrid = [
    {
      headerText: "Image",
      template: movieImage,
      textAlign: "Center",
      width: "120",
    },
    {
      field: "title",
      headerText: "Title",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "desc",
      headerText: "Description",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "category",
      headerText: "Category",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "isSeries",
      headerText: "Is Series",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "duration",
      headerText: "Duration",
      width: "150",
      textAlign: "Center",
    },
    {
      field: "video",
      headerText: "Video",
      width: "150",
      textAlign: "Center",
    },
    ,
    {
      field: "trailer",
      headerText: "Trailer",
      width: "150",
      textAlign: "Center",
    },
    {
      headerText: "Action",
      template: actionButton,
      width: "230",
      textAlign: "Center",
    },
  ];

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Movie" title="Movies" />
        <GridComponent
          id="gridcomp"
          dataSource={movies}
          allowPaging
          allowSorting
          contextMenuItems={contextMenuItems}
        >
          <ColumnsDirective>
            {movieGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
        </GridComponent>
      </div>
    </>
  );
};

export default Movies;
