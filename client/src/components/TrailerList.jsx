import React from 'react'
import TrailerItem from './TrailerItem'

const TrailerList = ({ movie }) => {
  return (
    <>
        <div className="flex flex-col trailerListContaner my-5 relative mb-10">
            <h1 className="text-2xl font-semibold text-left ml-5">Trailer</h1>
            <div className="trailerContainer flex flex-nowrap justify-start ml-16">
              <TrailerItem item={movie}/>
            </div>
        </div>
    </>
  )
}

export default TrailerList