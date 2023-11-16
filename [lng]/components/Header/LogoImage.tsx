import Image from 'next/image'
import { useTheme } from 'next-themes'

function LogoImage() {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case 'light':
      src='/logo.svg'
      break
    case 'dark':
      src='/logoDark.png'
      break
    default:
      src='/logo.svg'
      break
  }

  return <img src={src} className="h-8 mr-3" alt="Shefer Logo" />
}

export default LogoImage