interface StyledButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  customClassName?: string;
  textButton?: boolean;
  alternative?: boolean;
}

const StyledButton = (props: StyledButtonProps) => {
  const { text, onClick, disabled, customClassName, textButton, alternative } = props;

  // Conditional classes for the text-style button
  const buttonStyleClasses = textButton
    ? "rounded-md bg-transparent hover:bg-btn-text-background-hover dark:hover:bg-dark-btn-background-hover text-btn-text dark:text-dark-btn-text"
    : alternative
      ? "text-sh-azure bg-transparent border-2 border-sh-azure rounded-full hover:bg-sh-azure hover:text-white focus:outline-none focus:ring-2 focus:ring-sh-azure focus:ring-opacity-50 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-sh-azure"
      : "bg-btn-background dark:bg-background-white text-foreground"

  const buttonClasses = `py-2 px-4 no-underline ${buttonStyleClasses} ${customClassName ?? ""}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default StyledButton;
