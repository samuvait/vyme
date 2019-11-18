/*import React from 'react'
import FlexView from 'react-flexview'
import Rating from './Rating'
//import './movie.css'

const posterUrl = 'https://image.tmdb.org/t/p/w185'
const shortDescLength = 40

const FlexMovie = ({ movie }) => {
  const movieName = movie.title
  const description = `${movie.overview.substring(0, shortDescLength)}...`
  const posterPath = `${posterUrl}${movie.poster_path}`
  const avrg = movie.vote_average

  return (
    <FlexView basis={350} style={{ width: 290 }}>
      <FlexView hAlignContent='left'>
        <figure style={{padding: 0}}>
          <img src={posterPath} alt='poster' width='185' height='278' style={{padding: 0}} />
          <figcaption className='moviename'><p>{description}</p></figcaption>
        </figure>
      </FlexView>
      <Rating name='TMDb' average={avrg} />
    </FlexView>
  )
}

export default FlexMovie*/