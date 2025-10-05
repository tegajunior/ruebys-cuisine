'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import classes from './image-slideshow.module.css'

import vegetableSoup from '@/assets/images/edikang-ikong-vegetable.jpg'
import bitterleafSoup from '@/assets/images/Bitterleaf soup-2.jpg'
import okraSoup from '@/assets/images/okra-soup-2.jpg'
import beefStew from '@/assets/images/Beef stew.jpg'
import fishStew from '@/assets/images/Fish stew.jpg'

const images = [
  { image: bitterleafSoup, alt: 'Bitterleaf soup' },
  { image: vegetableSoup, alt: 'Edikang Ikong vegetable soup' },
  { image: okraSoup, alt: 'Okra soup' },
  { image: beefStew, alt: 'Beef stew' },
  { image: fishStew, alt: 'Fish stew' },
]

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  )
}
