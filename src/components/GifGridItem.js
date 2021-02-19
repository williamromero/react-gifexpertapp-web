import React from 'react'

const GifGridItem = ({id, url, title}) => {
  // console.log(img)

  return (
    <>
      <img key={ id } src={ url } alt={ title } />
    </>
  )
}

export default GifGridItem
