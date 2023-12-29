'use client'

import Image from "next/image";
import StyledButton from "../ThemesComponents/StyledButton";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface ITattoo {
  lng: string;
}

const TattooMachineBlock: React.FC<ITattoo> = ({ lng }) => {
  const router = useRouter();
  const { t } = useTranslation(lng, 'mainPage')
  const [color, setColor] = useState<string>('azure');

  const changeColor = useCallback((currentColor: string) => {
    setColor(currentColor);
  }, []);

  const goingProduct = useCallback(() => {
    router.push(`/${lng}/catalog/`)
  }, [lng, router]);

  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollFactor = window.scrollY / window.innerHeight * 5; // Normalize scroll position
        const rotation = 30 * Math.sin(scrollFactor * Math.PI);
        imageRef.current.style.transform = `rotateZ(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const machineImg = useMemo(() => {
    switch (color) {
      case ('azure'):
        return 'https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/machine_angle.png'
      case ('wine'):
        return 'https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/machine_angle.png'
      case ('black'):
        return 'https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/machine_angle.png'
      case ('grey'):
        return 'https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/machine_angle.png'

      default: return 'https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/machine_angle.png'
    }
  }, [color])

  return (
    <div
      className="w-full flex flex-col justify-center items-center"
    >
      <div ref={imageRef} className="rotate-y-0 transition-transform origin-bottom">
        <Image
          className=""
          src={machineImg}
          alt="Product"
          width={500}
          height={300}
          style={{ height: 'auto' }}
          priority={true}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => changeColor('azure')}
          className={`hover:border dark:hover:border-sh-white hover:border-sh-black w-10 h-10 bg-sh-azure hover:bg-sh-azure focus:outline-none focus:ring-4 focus:ring-sh-azure font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-sh-azure dark:hover:bg-sh-azure dark:focus:ring-sh-azure`}
        />
        <button
          type="button"
          onClick={() => changeColor('wine')}
          className={`hover:border dark:hover:border-sh-white hover:border-sh-black w-10 h-10 bg-sh-wine hover:bg-sh-wine focus:outline-none focus:ring-4 focus:ring-sh-wine font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-sh-wine dark:hover:bg-sh-wine dark:focus:ring-sh-wine`}
        />
        <button
          type="button"
          onClick={() => changeColor('black')}
          className={`hover:border dark:hover:border-sh-white hover:border-sh-black w-10 h-10 bg-sh-black hover:bg-sh-black focus:outline-none focus:ring-4 focus:ring-sh-black font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-sh-black dark:hover:bg-sh-black dark:focus:ring-sh-black`}
        />
        <button
          type="button"
          onClick={() => changeColor('grey')}
          className={`hover:border dark:hover:border-sh-white hover:border-sh-black w-10 h-10 bg-sh-grey hover:bg-sh-grey focus:outline-none focus:ring-4 focus:ring-sh-grey font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-sh-grey dark:hover:bg-sh-grey dark:focus:ring-sh-grey`}
        />
      </div>
      <div className="text-4xl mt-4" >{t('Shefer pen')}</div>
      <div className="text-4xl mb-4" >{t('Тату машинка')}</div>
      <StyledButton
        text={t('смотреть').toUpperCase()}
        onClick={goingProduct}
        alternative
      />
    </div>
  )
};

export default TattooMachineBlock;