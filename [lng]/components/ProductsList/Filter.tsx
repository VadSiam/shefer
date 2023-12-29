'use client'

import { useTranslation } from "@/app/i18n/client";
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from "react";

export type filterTypes = 'all' | 'pigment' | 'equipment' | 'merch' | 'lips' | 'brows' | 'eyes';

const ProductsListFilter: React.FC<{ lng: string, setFilter: Dispatch<SetStateAction<filterTypes>> }> = ({ lng, setFilter }) => {
  const { t } = useTranslation(lng, 'Catalog')

  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<filterTypes>('all');

  useEffect(() => {
    setFilter(activeFilter);
  }, [activeFilter, setFilter]);

  const toggleFilters = useCallback(() => {
    setShowFilters(state => !state);
  }, []);

  const handleFilterClick = useCallback((filter: filterTypes) => {
    setActiveFilter(filter);
  }, []);

  const showBottomFilters = useMemo(() => {
    return activeFilter === 'pigment' || activeFilter === 'lips' || activeFilter === 'brows' || activeFilter === 'eyes';
  }, [activeFilter]);


  return (
    <div className="w-full flex items-center justify-end py-4 md:p-8 flex-wrap">

      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <button className="w-full text-right mr-1 hidden md:block" onClick={toggleFilters}>
            {t('Фильтр').toUpperCase()}
          </button>
          <svg
            className="hidden md:block"
            width="7" height="5" viewBox="0 0 7 5" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path transform={showFilters ? "rotate(180, 3.5, 2.5)" : ""} d="M3.5 4.5L0.901925 -4.89399e-07L6.09808 -3.51373e-08L3.5 4.5Z" fill="currentColor" />
          </svg>
          <div
            onClick={toggleFilters}
            className="md:hidden w-full text-right mr-1 flex justify-end pr-6"
          >
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.75 5H18" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 5H4.25" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.75 15H15.5" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.5 15H4.25" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26.75 25H20.5" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.5 25H4.25" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 2.5V7.5" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.5 12.5V17.5" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.5 22.5V27.5" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {showFilters && (
          <div className="flex flex-col justify-between ">
            <div className="flex divide-x-2 text-center divide-svg-stroke-color border-b-2 border-svg-stroke-color p-2">
              <button
                onClick={() => handleFilterClick('all')}
                className={`${activeFilter === 'all' ? 'text-sh-azure' : ''} px-4`}
              >
                <span className="uppercase">{t('Все')}</span>
              </button>
              <button
                onClick={() => handleFilterClick('pigment')}
                className={`${showBottomFilters ? 'text-sh-azure' : ''} px-4`}
              >
                <span className="uppercase">{t('Пигменты')}</span>
              </button>
              <button
                onClick={() => handleFilterClick('equipment')}
                className={`${activeFilter === 'equipment' ? 'text-sh-azure' : ''} px-4`}
              >
                <span className="uppercase">{t('Оборудование')}</span>
              </button>
              <button
                onClick={() => handleFilterClick('merch')}
                className={`${activeFilter === 'merch' ? 'text-sh-azure' : ''} px-4`}
              >
                <span className="uppercase">{t('Мерч')}</span>
              </button>
            </div>
            {showBottomFilters &&
              (<div className="flex justify-center text-center divide-x-2 divide-svg-stroke-color p-2">
                <button
                  onClick={() => handleFilterClick('lips')}
                  className={`${activeFilter === 'lips' ? 'text-sh-azure' : ''} px-4 w-full`}
                >
                  <span className="uppercase">{t('Губы')}</span>
                </button>
                <button
                  onClick={() => handleFilterClick('brows')}
                  className={`${activeFilter === 'brows' ? 'text-sh-azure' : ''} px-4 w-full`}
                >
                  <span className="uppercase">{t('Брови')}</span>
                </button>
                <button
                  onClick={() => handleFilterClick('eyes')}
                  className={`${activeFilter === 'eyes' ? 'text-sh-azure' : ''} px-4 w-full`}
                >
                  <span className="uppercase">{t('Веки')}</span>
                </button>
              </div>)}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsListFilter;