import React, { useEffect, useState } from 'react'
import { fetchByUrl } from '../redux/actions/movieActions'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { baseImgUrl } from './Hero';
import { Link } from 'react-router-dom';

const ListMovie = ({genre}) => {
    const [movies,setMovies] = useState([])
    useEffect(() => {
      fetchByUrl(`/discover/movie?with_genres=${genre.id}`)
      .then((res)=>setMovies(res.results))
    }, [])
    
  return (
    <div className='bg-dark text-light px-3'>
        <h1>{genre.name}</h1>
        <Splide options={{autoWidth:true, gap:10, pagination:false}}>
            {
            movies.map((film,index)=>(
                <SplideSlide key={index} 
                >
                    <Link to={`/movie/${film.id}`}>
                    <img className='film' src={`${baseImgUrl}${film.poster_path}`} alt="" />
                    </Link>
                    </SplideSlide>
            ))
        }
        </Splide>
        
    </div>
  )
}

export default ListMovie