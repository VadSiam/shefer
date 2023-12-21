'use client'

import { useTranslation } from "@/app/i18n/client";

interface IStatistics {
  lng: string;
}

const StatisticsBlock: React.FC<IStatistics> = ({ lng }) => {
  const { t } = useTranslation(lng, 'mainPage');

  return (
    <div className="flex flex-col justify-between md:justify-center items-center md:flex-row md:px-6 md:py-4 px-2 py-5">
      <div className="flex justify-between text-center">
        <StatisticItem
          title={t("лет в бьюти-индустрии").toUpperCase()}
          value="6"
        />
        <StatisticItem
          title={t("оригинальных пигментов").toUpperCase()}
          value="15"
        />
      </div>
      <div className="flex justify-between text-center">
        <StatisticItem
          title={t("стран для экспорта").toUpperCase()}
          value="100"
        />
        <StatisticItem
          title={t("брендовые тату-машинки").toUpperCase()}
          value="2"
        />
      </div>
    </div>
  );
};

export default StatisticsBlock;

const StatisticItem = ({ title, value }: { title: string, value: string }) => (
  <div className="flex flex-1 flex-col items-center text-center md:mb-4 mb-3">
    <span className="text-5xl font-bold mb-2">{value}</span>
    <span className="text-sm">{title}</span>
  </div>
);