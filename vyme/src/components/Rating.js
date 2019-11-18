import React from 'react'

const Rating = ({ name, average}) => {
  return (
    <p>{`${name} ${average}/10`}</p>
  )
}

export default Rating