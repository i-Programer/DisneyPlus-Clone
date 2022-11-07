import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";
import MovieList from '../components/MovieList'
import MovieSlider from '../components/MovieSlider'
import WatchList from '../components/WatchList';
import { WatchlistContext } from '../context/watchlistContext/WatchlistContext';
import { getWatchlists } from '../context/watchlistContext/apiCalls';
import { AuthContext } from '../context/authContext/AuthContext';

const Home = () => {
  const popularMovies = {
    title: "Most Popular Movies",
    listItem: [
      {
        title: "Coco",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorum magnam nostrum pariatur molestias quas earum similique porro at eum",
        img:"/img/movie/MostPopular/Coco.png",
        duration: "1 hr 25 min",
        year: "2016",
        category: "Kids",
        limit: "PG"
      },
      {
        title: "Coco",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorum magnam nostrum pariatur molestias quas earum similique porro at eum",
        img:"/img/movie/MostPopular/Coco.png",
        duration: "1 hr 25 min",
        year: "2016",
        category: "Kids",
        limit: "PG"
      },
      {
        title: "Coco",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorum magnam nostrum pariatur molestias quas earum similique porro at eum",
        img:"/img/movie/MostPopular/Coco.png",
        duration: "1 hr 25 min",
        year: "2016",
        category: "Kids",
        limit: "PG"
      },
      {
        title: "Coco",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorum magnam nostrum pariatur molestias quas earum similique porro at eum",
        img:"/img/movie/MostPopular/Coco.png",
        duration: "1 hr 25 min",
        year: "2016",
        category: "Kids",
        limit: "PG"
      },
      {
        title: "Coco",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorum magnam nostrum pariatur molestias quas earum similique porro at eum",
        img:"/img/movie/MostPopular/Coco.png",
        duration: "1 hr 25 min",
        year: "2016",
        category: "Kids",
        limit: "PG"
      },
      {
        title: "Coco",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorum magnam nostrum pariatur molestias quas earum similique porro at eum",
        img:"/img/movie/MostPopular/Coco.png",
        duration: "1 hr 25 min",
        year: "2016",
        category: "Kids",
        limit: "PG"
      },
      {
        title: "Coco",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorum magnam nostrum pariatur molestias quas earum similique porro at eum",
        img:"/img/movie/MostPopular/Coco.png",
        duration: "1 hr 25 min",
        year: "2016",
        category: "Kids",
        limit: "PG"
      },
      {
        title: "Coco",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorum magnam nostrum pariatur molestias quas earum similique porro at eum",
        img:"/img/movie/MostPopular/Coco.png",
        duration: "1 hr 25 min",
        year: "2016",
        category: "Kids",
        limit: "PG"
      },
      {
        title: "Coco",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorum magnam nostrum pariatur molestias quas earum similique porro at eum",
        img:"/img/movie/MostPopular/Coco.png",
        duration: "1 hr 25 min",
        year: "2016",
        category: "Kids",
        limit: "PG"
      },
      {
        title: "Coco",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet dolorum magnam nostrum pariatur molestias quas earum similique porro at eum",
        img:"/img/movie/MostPopular/Coco.png",
        duration: "1 hr 25 min",
        year: "2016",
        category: "Kids",
        limit: "PG"
      },
    ]
  }
  const [lists, setLists] = useState([]);
  const [type, setType] = useState(null);

  const { watchlists, dispatch } = useContext(WatchlistContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getAllList = async () => {
      try{
        const res = await axios.get("lists", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjVjNTFkMWI5NGYxZDFiNWJkY2FlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkxNTkyOCwiZXhwIjoxNjY0MzQ3OTI4fQ.Rg6qAsK2_taQtmSiYwq5MhpzmXx_ndPd9nfhaAUtY3w"
          }
        });
        console.log(res);
        setLists(res.data);
      } catch(err) {
        console.log(err);
      }
    }
    getAllList();
  }, [type])

  useEffect(() => {
    getWatchlists(user._id, dispatch);
    console.log("Home.jsx: ", watchlists);
  }, [dispatch])

  return (
    <>
      <MovieSlider/>

      <WatchList watchlists={watchlists}/>

      {lists.map((list, i) => (
        <MovieList lists={list} key={i}/>
      ))}
    </>
  )
}

export default Home