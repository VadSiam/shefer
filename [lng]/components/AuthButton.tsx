'use client'
import Link from 'next/link'
import { User } from '@supabase/supabase-js'
import { useMainContext } from '@/utils/context/main.context'
import StyledButton from './ThemesComponents/StyledButton'
import StyledLink from './ThemesComponents/StyledLink'
import { IPageElementProps } from '@/app/[lng]/page'

interface IAuth {
  userData: User | null
  resetUserData: () => void
}

const AuthButton: React.FC<IPageElementProps> = ({ lng }) => {
  const { resetUserData, userData } = useMainContext();

  const signOut = () => {
    resetUserData()
  }

  return userData ? (
    <div className="flex items-center gap-4">
      <form action={signOut}>
        <StyledButton
          text='Logout'
          onClick={() => { }}
        />
      </form>
    </div>
  ) : (
    <StyledLink
      text='Login'
      href={`/${lng}/login`}
    />
  )
}

export default AuthButton