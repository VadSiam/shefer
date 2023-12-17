'use client'
import { useMainContext } from '@/utils/context/main.context'
import { useTranslation } from '@/app/i18n/client'
import { isAdminCheck } from '@/utils/helpers'

interface IAdmin {
  lng: string
}

const AdminButton: React.FC<IAdmin> = ({ lng }) => {
  const { userData } = useMainContext();
  const { t } = useTranslation(lng, 'header')
  const isAdmin = isAdminCheck(userData);

  if (!isAdmin) {
    return null;
  }

  return (
    <a
      href="https://main.d39t7zu29tonk1.amplifyapp.com"
      className='flex items-center mr-3'
      aria-current="page"
    >
      <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        {t('Админка')}
      </button>
    </a>
  )
}

export default AdminButton