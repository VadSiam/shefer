import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as ISwiper } from 'swiper/types';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';
import { useCallback, useMemo, useState } from 'react';
import { IImage } from '../Carousel/types';
import Modal from './Modal';

interface SwiperElementProps {
  images: IImage[]
}

const SwiperElement: React.FC<SwiperElementProps> = ({
  images,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper | null>(null);
  const sortedImages = useMemo(() => images.sort((a, b) => a.order - b.order), [images]);

  const [imageModal, setImageModal] = useState<IImage | null>(null);
  console.log('🚀 ~ imageModal:', imageModal)
  const openModal = useCallback((index: number) => {
    console.log('🚀 ~ file: index.tsx:30 ~ index:', index)
    const image = images.find(image => image.order === index);
    if (!image) return;
    setImageModal(image);
  }, [images]);

  const closeModal = useCallback(() => {
    setImageModal(null);
  }, []);

  return (
    <div className='flex flex-col max-w-full'>
      <Swiper
        style={{
          // @ts-ignore
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#fff',
          '--swiper-navigation-size': '20px',
        }}
        // loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null, }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {sortedImages.map((image) => (
          <SwiperSlide onClick={() => openModal(image.order)} key={image.order}>
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${image.url}`}
              alt="Shefer product big size"
              width={500}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        // loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {sortedImages.map((image) => (
          <SwiperSlide key={image.order}>
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${image.url}`}
              alt="Shefer product"
              width={500}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal image={imageModal} onClose={closeModal} show={!!imageModal} />
    </div>

  )
}

export default SwiperElement;