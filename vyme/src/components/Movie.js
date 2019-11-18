import React from 'react'
import Rating from './Rating'
import './movie.css'

const posterUrl = 'https://image.tmdb.org/t/p/w185'
const shortDescLength = 30

const Movie = ({ movie }) => {
  const movieName = movie.title
  const description = `${movie.overview.substring(0, shortDescLength)}...`
  const posterPath = `${posterUrl}${movie.poster_path}`
  const avrg = movie.vote_average

  return (
    <td className='singlemovieview' >
      <figure className='poster'>
        <img src={posterPath} alt='poster' width='185' height='278' className='posterimg'/>
        <figcaption className='moviename'><p>{description}</p></figcaption>
      </figure>
      <Rating name='TMDb' average={avrg}/>
    </td>
  )
}

export default Movie