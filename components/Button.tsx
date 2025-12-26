import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "filled" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  target?: string;
  href?: string;
  fullWidth?: boolean;
}

export default function Button({
  variant = "filled",
  children,
  href,
  target,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 my-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    filled: "bg-ld-teal text-black hover:bg-white active:scale-95",
    outline:
      "bg-transparent border-gray-800 border hover:bg-ld-teal hover:text-black active:scale-95",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    widthStyle,
    className
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} target={target} className={buttonClasses}>
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
