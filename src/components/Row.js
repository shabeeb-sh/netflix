import React, { useEffect, useState } from 'react'
import instance from '../instanceConfig'
import './Row.css';


function Row({title,fetchUrl}) {

    const base_url = "https://image.tmdb.org/t/p/original/";


    const [movies,setMovies] = useState([])

    const fetchData = async ()=>{
        const response = await instance.get(fetchUrl)
        const {results} = response.data
        // console.log(response);
        setMovies(results)
    }

    // console.log(movies);

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="movies_row">
            {
                movies.map((movie)=>(
                    <img className='movie' src={`${base_url}/${movie.backdrop_path}`} alt="movie img" />
                ))
            }
        </div>
    </div>
  )
}

export default Row