import React, { useState, useEffect } from 'react'
import MovieTable from './MovieTable'
import movieService from '../services/movies'
import GridGallery from './GridGallery'

const Movies = ({ movies, setMovies }) => {

  const getWindowSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  const [windowSize, setWindowSize] = useState(getWindowSize)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  useEffect(() => {
    movieService
    .getTrending()
    .then(movieList => {
      console.log('Movies set to', movieList)
      setMovies(movieList)
    })
  }, [])

  return (
    <GridGallery movies={movies} windowSize={windowSize}/>
  )
}

export default Movies