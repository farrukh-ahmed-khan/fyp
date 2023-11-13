import React from 'react'
import arrow from "../Assets/images/Arrow 1.png"
import "../Assets/css/gallerybutton.css"

const GalleryButton = () => {
  return (
    <div className='gallery-button'><p>Go to Gallery <img src={arrow}/></p></div>
  )
}

export default GalleryButton