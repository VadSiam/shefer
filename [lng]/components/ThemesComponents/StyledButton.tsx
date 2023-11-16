interface StyledButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  customClassName?: string;
}

const StyledButton = (props: StyledButtonProps) => {
  const { text, onClick, disabled, customClassName } = props;
  return (
    <button
      className={customClassName ?? "py-2 px-4 rounded-md no-underline bg-btn-background text-foreground hover:bg-btn-background-hover dark:bg-background-white dark:text-foreground-dark-gray"}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
export default StyledButton;