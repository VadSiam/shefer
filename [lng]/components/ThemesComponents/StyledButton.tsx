interface StyledButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  customClassName?: string;
  textButton?: boolean;
  alternative?: boolean;
  warning?: boolean;
  type?: "button" | "submit" | "reset";
}

const StyledButton = (props: StyledButtonProps) => {
  const { text, onClick, disabled, customClassName, textButton, alternative, warning, type } = props;

  // Conditional classes for the text-style button
  const buttonStyleClasses = textButton
    ? "rounded-md bg-transparent hover:bg-btn-text-background-hover dark:hover:bg-dark-btn-background-hover text-btn-text dark:text-dark-btn-text"
    : alternative
      ? "text-sh-azure bg-transparent border-2 border-sh-azure rounded-full hover:bg-sh-azure hover:text-white focus:outline-none focus:ring-2 focus:ring-sh-azure focus:ring-opacity-50 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-sh-azure"
      : warning
        ? "text-sh-wine bg-transparent border-2 border-sh-wine rounded-full hover:bg-sh-wine hover:text-white focus:outline-none focus:ring-2 focus:ring-sh-wine focus:ring-opacity-50 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-sh-wine"
        : "bg-btn-background dark:bg-background-white text-foreground"

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-500 border-gray-300 hover:bg-gray-300 hover:text-gray-500 hover:border-gray-300"
    : "hover:opacity-80 transition-opacity duration-200"

  const buttonClasses = `py-2 px-4 no-underline ${buttonStyleClasses} ${disabledClasses} ${customClassName ?? ""}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
}

export default StyledButton;
