import React, { useState, useEffect } from 'react'
import movieService from '../services/movies'
import GridGallery from './GridGallery'
import './movies.css'

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
    <div className='container'>
      <div className='side' />
      <div className='main'>
        <GridGallery movies={movies} windowSize={windowSize} />
      </div>
      <div className='side' />
    </div>
  )
}

export default Movies