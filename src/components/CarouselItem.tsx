import Image from 'next/image'
import { useState } from 'react'

const CarouselItem = ({ image, description, width }) => {
  return (
    <>
      <div className="carousel-item" style={{ width: width }}>
        <Image className="carousel-img" src={image} alt={description} />
      </div>
      
    </>
  )
}

export default CarouselItem
