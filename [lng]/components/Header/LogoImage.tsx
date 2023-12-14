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
      src='/logoDark.svg'
      break
    default:
      src='/logo.svg'
      break
  }

  return <Image
    src={src}
    alt="Shefer Logo"
    width={100}
    height={32}
    className="h-8 mr-3"
  />
}

export default LogoImage