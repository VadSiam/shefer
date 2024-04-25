import { Spec } from "@/[lng]/components/Carousel/types"
import { TFunction } from "i18next"
import { FC, useState } from "react"

interface ISpec {
  spec: Spec
  t: TFunction<string, string>
}

const Specs: FC<ISpec> = ({
  spec,
  t,
}) => {
  const [show, setShow] = useState<boolean>(false)

  const showDetails = () => {
    setShow(!show)
  }

  return (
    <div
      className="mb-5 w-1/2"
      id="accordion-collapse"
      data-accordion="collapse"
    >
      <h2 id="accordion-collapse-heading-1">
        <button onClick={showDetails} type="button" className="flex items-center justify-between w-full p-5 pl-0 font-medium rtl:text-right text-gray-500 dark:text-gray-400 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
          <span>{t('Спецификация')}</span>
          <svg data-accordion-icon className={`w-3 h-3 ${show ? 'rotate-0' : 'rotate-180'} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-1 w-full" className={show ? "flex" : "hidden"} aria-labelledby="accordion-collapse-heading-1">
        <div className="p-5 ">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{`${t('Описание')}: ${spec.desc}`}</p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">{`${t('Вес')}: ${spec.weight}`}</p>
          <p className="text-gray-500 dark:text-gray-400">{`${t('Страна')}: ${spec.country}`}</p>
        </div>
      </div>
    </div>

  )
}

export default Specs