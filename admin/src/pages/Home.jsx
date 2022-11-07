import React, { useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { useStateContext } from '../context/ContextProvider';
import { Chart } from '../components';

const Home = () => {
  const { currentColor } = useStateContext();

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Juni",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    []
  )
  const [userStats, setUserStats] = useState([]);

  const [userCount, setUserCount] = useState(0);
  const [listCount, setListCount] = useState(0);
  const [movieCount, setMovieCount] = useState(0);

  useEffect(() => {
    const getUserStats = async () => {
      try{
        const res = await axios.get("/users/stats", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjVjNTFkMWI5NGYxZDFiNWJkY2FlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkxNTkyOCwiZXhwIjoxNjY0MzQ3OTI4fQ.Rg6qAsK2_taQtmSiYwq5MhpzmXx_ndPd9nfhaAUtY3w"
          }
        })
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id
        });

        statsList.map((item) => setUserStats((prev) => [
          ...prev,
          { name:MONTHS[item._id - 1], "New User": item.total }
        ]));
      } catch(err) {
        console.log(err);
      }
    }
    getUserStats()

    const getUserCount = async () => {
      try {
        const res = await axios.get("/users/count", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjVjNTFkMWI5NGYxZDFiNWJkY2FlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkxNTkyOCwiZXhwIjoxNjY0MzQ3OTI4fQ.Rg6qAsK2_taQtmSiYwq5MhpzmXx_ndPd9nfhaAUtY3w"
          }
        })
        setUserCount(res.data);
      } catch(err) {
        console.log(err);
      }
    }
    getUserCount();

    const getListCount = async () => {
      try {
        const res = await axios.get("/lists/count", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjVjNTFkMWI5NGYxZDFiNWJkY2FlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkxNTkyOCwiZXhwIjoxNjY0MzQ3OTI4fQ.Rg6qAsK2_taQtmSiYwq5MhpzmXx_ndPd9nfhaAUtY3w"
          }
        })
        setListCount(res.data);
      } catch(err) {
        console.log(err);
      }
    }
    getListCount();

    const getMovieCount = async () => {
      try {
        const res = await axios.get("/movies/count", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjVjNTFkMWI5NGYxZDFiNWJkY2FlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkxNTkyOCwiZXhwIjoxNjY0MzQ3OTI4fQ.Rg6qAsK2_taQtmSiYwq5MhpzmXx_ndPd9nfhaAUtY3w"
          }
        })
        setMovieCount(res.data);
      } catch(err) {
        console.log(err);
      }
    }
    getMovieCount();
  }, [MONTHS])

  return (
    <>
      <div className="mt-24">
        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          <div className="bg-white rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">User</p>
                <p className="text-2xl">{userCount}</p>
              </div>
            </div>
          </div>
          <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
            <div className="bg-white h-44 md:w-56 p-4 pt-9 rounded-2xl">
              <p className="mt-3">
                <span className="text-lg font-semibold">{listCount}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">List</p>
            </div>
            <div className="bg-white h-44 md:w-56 p-4 pt-9 rounded-2xl">
              <p className="mt-3">
                <span className="text-lg font-semibold">{movieCount}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">Movie</p>
            </div>
          </div>
        </div>
        <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      </div>
    </>
  )
}

export default Home