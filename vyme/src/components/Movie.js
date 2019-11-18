import React from 'react'
import Rating from './Rating'
import './movie.css'

const Movie = () => {
  const movieName = "name of the movie"


  return (
    <td className='singlemovieview'>
      <figure className='poster'>
        <img src='logo192.png' alt='logo' width='192' height='192' />
        <figcaption className='moviename'><h3>{movieName}</h3><p>Description.</p></figcaption>
      </figure>
      <Rating name='imdb'/>
      <Rating name='RT'/>
      <Rating name='MC'/>
    </td>
  )
}

export default Movie