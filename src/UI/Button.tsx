type IButton = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  type,
  children,
  className,
  onClick,
  disabled,
}: IButton) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
