// components/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "filled" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  href?: string;
  fullWidth?: boolean;
}

export default function Button({
  variant = "filled",
  children,
  href,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    filled: "bg-ld-teal text-black hover:bg-white-700 active:scale-95",
    outline:
      "bg-transparent border-gray-800 border-1 hover:bg-teal-500 active:scale-95",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const buttonClasses = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
