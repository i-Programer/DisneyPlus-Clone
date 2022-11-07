import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { useContext } from "react";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import storage from "../../firebase";

const CreateMovie = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgJumbotron, setImgJumbotron] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);
  console.log("From CreateMovie.jsx(dispatch): ", dispatch);
  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setMovie((prev) => {
              return {...prev, [item.label]: url}
            });
            setUploaded((prev) => prev + 1)
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      {file: img, label:"img"},
      {file: imgJumbotron, label:"imgJumbotron"},
      {file: trailer, label:"trailer"},
      {file: video, label:"video"},
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch)
  };

  return (
    <>
      <div className="newMovie flex-[4]">
        <h1 className="addMovieTitle font-semibold text-lg ml-5 mt-2">
          New Movie
        </h1>
        <form className="addMovieForm mt-[10px] flex flex-wrap">
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Image
            </label>
            <input
              className="p-[10px]"
              type="file"
              id="img"
              name="img"
              onChange={(e) => setImg(e.target.files[0])}
            />
          </div>
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Jumbotron Image
            </label>
            <input
              className="p-[10px]"
              type="file"
              id="imgJumbotron"
              name="imgJumbotron"
              onChange={(e) => setImgJumbotron(e.target.files[0])}
            />
          </div>
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Title
            </label>
            <input
              className="p-[10px]"
              type="text"
              placeholder="Moana"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Description
            </label>
            <input
              className="p-[10px]"
              type="text"
              placeholder=""
              name="desc"
              onChange={handleChange}
            />
          </div>
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Year
            </label>
            <input
              className="p-[10px]"
              type="text"
              placeholder=""
              name="year"
              onChange={handleChange}
            />
          </div>
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Category
            </label>
            <input
              className="p-[10px]"
              type="text"
              placeholder=""
              name="category"
              onChange={handleChange}
            />
          </div>
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Limit
            </label>
            <input
              className="p-[10px]"
              type="text"
              placeholder=""
              name="limit"
              onChange={handleChange}
            />
          </div>
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Duration
            </label>
            <input
              className="p-[10px]"
              type="text"
              placeholder=""
              name="duration"
              onChange={handleChange}
            />
          </div>
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Is Series
            </label>
            <select
              className="p-[10px]"
              name="isSeries"
              id="isSeries"
              onChange={handleChange}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Comingsoon
            </label>
            <select
              className="p-[10px]"
              name="comingsoon"
              id="comingsoon"
              onChange={handleChange}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Trailer
            </label>
            <input
              className="p-[10px]"
              type="file"
              id="trailer"
              name="trailer"
              onChange={(e) => setTrailer(e.target.files[0])}
            />
          </div>
          <div className="addMovieItem w-[250px] flex flex-col mb-[10px] p-[20px]">
            <label className="text-gray-500 font-semibold mb-[10px]">
              Video
            </label>
            <input
              className="p-[10px]"
              type="file"
              id="video"
              name="video"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>

          {uploaded === 4 ? (
            <button
              className="addMovieButton h-[30px] mt-[10px] py-[7px] px-[10px] border-none rounded-md bg-blue-900 text-white font-semibold cursor-pointer self-center"
              onClick={handleSubmit}
            >
              Create
            </button>
          ) : (
            <button
              className="addMovieButton h-[30px] mt-[10px] py-[7px] px-[10px] border-none rounded-md bg-blue-900 text-white font-semibold cursor-pointer self-center"
              onClick={handleUpload}
            >
              Upload
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default CreateMovie;
