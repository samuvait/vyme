import React, { useState, useEffect } from 'react'
import MovieTable from './MovieTable'

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

  return (
    <MovieTable windowSize={windowSize} />
  )
}

export default Movies