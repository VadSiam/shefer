'use client'
import { useMainContext } from '@/utils/context/main.context'
import StyledButton from './ThemesComponents/StyledButton'
import StyledLink from './ThemesComponents/StyledLink'
import { IPageElementProps } from '@/app/[lng]/page'


const AuthButton: React.FC<IPageElementProps> = ({ lng }) => {
  const { resetUserData, userData } = useMainContext();

  const signOut = async () => {
    resetUserData()
  }

  return userData ? (
    <div className="flex items-center gap-4">
      <StyledButton
        text='Logout'
        onClick={signOut}
      />
    </div>
  ) : (
    <StyledLink
      text='Login'
      href={`/${lng}/login`}
    />
  )
}

export default AuthButton