import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, getMovies } from '../redux/actions/movieActions'
import Hero from '../components/Hero';
import ListMovie from '../components/ListMovie';



const MainPage = () => {
    const dispatch = useDispatch();
    const state =useSelector((store)=>store.movieReducer)
    useEffect(() => {
  dispatch(getMovies());

  dispatch(getGenres());
  
}, [])
  return (
    <div>
      {/* popüler */}
      <Hero/>
      {/* category */}
      {state.genres.map((genre)=>(
      <ListMovie key={genre.id} genre={genre}/>))}
    </div>
  )
}

export default MainPage