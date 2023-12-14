import Link from "next/link"

interface StyledLinkProps {
  href: string
  text: string
  textButton?: boolean
}

const StyledLink = (props: StyledLinkProps) => {
  const { text, href, textButton } = props;

  const linkStyleClasses = textButton
    ? "bg-transparent hover:bg-btn-text-background-hover dark:hover:bg-dark-btn-background-hover text-btn-text dark:text-dark-btn-text"
    : "py-2 px-3 flex rounded-md no-underline bg-btn-background text-foreground hover:bg-btn-background-hover dark:bg-background-white dark:text-foreground-dark-gray"

  return (
    <Link
      href={href}
      className={`py-2 px-3 flex rounded-md no-underline ${linkStyleClasses}`}
    >
      {text}
    </Link>
  )
}

export default StyledLink;