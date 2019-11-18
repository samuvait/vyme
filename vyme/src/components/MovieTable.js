import React from 'react'
import Movie from './Movie'

const MovieTable = ({ movies, windowSize }) => {

  const createMovies = (movies, nCells) => {
    return movies.map(movie => {
      return (
        <table>
          <tbody>
            <tr>
                <Movie movie={movie} />
            </tr>
          </tbody>
        </table>
      )
    })
  }

  //console.log('floored', Math.floor(windowSize.width/280))

  return (
    <div>
      {createMovies(movies, 1)}
    </div>
  )
}

export default MovieTable