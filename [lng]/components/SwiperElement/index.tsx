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
import { useMemo, useState } from 'react';
import { IImage } from '../Carousel/types';

interface SwiperElementProps {
  images: IImage[]
}

const SwiperElement: React.FC<SwiperElementProps> = ({
  images,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<ISwiper | null>(null);
  const sortedImages = useMemo(() => images.sort((a, b) => a.order - b.order), [images]);

  return (
    <div className='flex flex-col max-w-full'>
      <Swiper
        style={{
          // @ts-ignore
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        // loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null, }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {sortedImages.map((image) => (
          <SwiperSlide key={image.order}>
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${image.url}`}
              alt="Description of Image"
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
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {sortedImages.map((image) => (
          <SwiperSlide key={image.order}>
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${image.url}`}
              alt="Description of Image"
              width={500}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  )
}

export default SwiperElement;