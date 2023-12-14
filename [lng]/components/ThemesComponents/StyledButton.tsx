interface StyledButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  customClassName?: string;
  textButton?: boolean; // New prop for text-style button
}

const StyledButton = (props: StyledButtonProps) => {
  const { text, onClick, disabled, customClassName, textButton } = props;

  // Conditional classes for the text-style button
  const buttonStyleClasses = textButton
    ? "bg-transparent hover:bg-btn-text-background-hover dark:hover:bg-dark-btn-background-hover text-btn-text dark:text-dark-btn-text"
    : "bg-btn-background dark:bg-background-white text-foreground";

  const buttonClasses = `py-2 px-4 rounded-md no-underline ${buttonStyleClasses} ${customClassName ?? ""}`;

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
