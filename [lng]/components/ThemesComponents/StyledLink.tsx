import Link from "next/link"

interface StyledLinkProps {
  href: string
  text: string
}

const StyledLink = (props: StyledLinkProps) => {
  const { text, href } = props;

  return (
    <Link
      href={href}
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background text-foreground hover:bg-btn-background-hover dark:bg-background-white dark:text-foreground-dark-gray"
    >
      {text}
    </Link>
  )
}

export default StyledLink;