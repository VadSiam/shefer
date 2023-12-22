'use client'

import Image from "next/image";
import StyledButton from "../ThemesComponents/StyledButton";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
import { useCallback } from "react";

interface ITattoo {
  lng: string;
}

const TattooMachineBlock: React.FC<ITattoo> = ({ lng }) => {
  const router = useRouter();
  const { t } = useTranslation(lng, 'mainPage')

  const goingProduct = useCallback(() => {
    router.push(`/${lng}/catalog/`)
  }, [lng, router]);

  return (
    <div>
      <Image
        className="p-6"
        src={'https://wiesbdispmispsuqfjne.supabase.co/storage/v1/object/public/products_images/public/moroz_bej1.png'}
        alt="Product"
        width={200}
        height={100}
        priority={true}
      />
      <div>Colors-button</div>
      <div>{t('Shefer pen')}</div>
      <div>{t('Тату машинка')}</div>
      <StyledButton
        text={t('смотреть').toUpperCase()}
        onClick={goingProduct}
        alternative
      />
    </div>
  )
};

export default TattooMachineBlock;