import React from 'react';
import Gallery from 'react-grid-gallery'

const GridGallery = ({ movies }) => {

  const posterUrl = 'https://image.tmdb.org/t/p/w185'
  const shortDescLength = 40

  const IMAGES = movies.map(movie => {
    const movieName = movie.title
    const longDesc = movie.overview
    const description = `${longDesc.substring(0, shortDescLength)}...`
    const posterPath = `${posterUrl}${movie.poster_path}`
    const avrg = movie.vote_average
    const genres = movie.genre_ids

    return ({
      src: posterPath,
      thumbnail: posterPath,
      thumbnailWidth: 185,
      thumbnailHeight: 278,
      alt: movieName,
      tags: genres,
      caption: longDesc
    })
  })

  return (
    <Gallery images={IMAGES} enableImageSelection={false} rowHeight={280} />
  )
}

export default GridGallery