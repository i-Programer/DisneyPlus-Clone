import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  Movies,
  MovieDetails,
  CreateMovie,
  Lists,
  ListDetails,
  CreateList,
  Users,
  UserDetails,
} from "./pages";
import { Sidebar } from "./components";
import { useStateContext } from "./context/ContextProvider";

import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  const { activeMenu } = useStateContext();

  console.log(user);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        </Routes>
        {user && (
          <div className="flex relative">
            {activeMenu ? (
              <div className="w-72 fixed sidebar bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0">
                <Sidebar />
              </div>
            )}
            <div
              className={
                activeMenu
                  ? "bg-main-bg min-h-screen md:ml-72 w-full"
                  : "bg-main-bg w-full min-h-screen flex-2"
              }
            >
              <div>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />

                  <Route path="/movies" element={<Movies />} />
                  <Route path="/movie" element={<MovieDetails />} />
                  <Route path="/newMovie" element={<CreateMovie />} />

                  <Route path="/lists" element={<Lists />} />
                  <Route path="/list" element={<ListDetails />} />
                  <Route path="/newList" element={<CreateList />} />

                  <Route path="/users" element={<Users />} />
                  <Route path="/user" element={<UserDetails />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
