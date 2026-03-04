type IButton = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
};

export default function Button({
  type,
  children,
  className,
  onClick,
}: IButton) {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
}
