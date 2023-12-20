'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import ProductCard, { IProductCard } from './ProductCard'
import { ExtendedEmblaOptionsType } from '@/app/[lng]/page'

type IEmblaCarousel = {
  slides: IProductCard[]
  options?: ExtendedEmblaOptionsType
  lng: string
}

const EmblaCarousel: React.FC<IEmblaCarousel> = ({ slides, options, lng }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, options?.autoplay ? [Autoplay({
    delay: 3000,
    stopOnInteraction: false,
  })] : [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container h-1/2-screen">
          {slides.map((item, index) => (
            <ProductCard item={item} key={index} lng={lng} />
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
}

export default EmblaCarousel