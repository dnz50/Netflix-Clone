import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchByUrl } from '../redux/actions/movieActions';
import { baseImgUrl } from '../components/Hero';
import millify from "millify";

const MovieDetail = () => {
  const [detail, setDetail] = useState(null)
  const { movieId } = useParams();
  useEffect(() => {
    fetchByUrl(`/movie/${movieId}`)
      .then((res) => setDetail(res))
  }, [])
  if (detail === null) return "Loading"

  return (
    <div className='detail row bg-dark text-light'>
      <div className='col-md-5 d-flex align-items-center justify-content-center'>
        <img className='detail-img img-fluid' src={`${baseImgUrl}${detail.poster_path}`} alt="" />
      </div>
      <div className='col-md-6 d-flex flex-column m-2'>
        <h2>{detail.title}</h2>
        <p >{detail.overview}</p>
        <p className='text-warning'>{`IMDB: ${detail.vote_average} `}</p>
        <div className="row row-cols-2">
          <div>
            <div className='col g-2'>
              Category:
              {detail.genres.map((genre,index) => (
                <p key={index} className='badge bg-danger mx-1'>{genre.name}</p>
              ))}
            </div>
            <div className='col g-2'>
              Language:
              {detail.spoken_languages.map((lang,index)=>(
                <p key={index} className='badge bg-secondary mx-1'>{lang.name}</p>
              ))}
            </div>
            <div className='col g-2'>
              Production Companies:
              {detail.production_companies.map((comp,index)=>(
                <p key={index} className='badge bg-light text-dark mx-1'>{comp.name}</p>
              ))}
            </div>

          </div>
          <div className='col g-2'>
            <p>{`Budget: ${millify(detail.budget)}$`}</p>
            <p>{`Revenue: ${millify(detail.revenue)}$`}</p>
            <p>{`Profit: ${millify(detail.revenue - detail.budget)}$`} </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieDetail