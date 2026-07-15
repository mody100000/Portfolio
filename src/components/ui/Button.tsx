import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "filled" | "outline";
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = "filled",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  // Base classes with keyboard focus states, transition, and reduced motion safety
  const baseClassName =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none motion-reduce:transition-none";

  const variantClassNames = {
    filled: "bg-accent text-accent-text hover:opacity-90 active:scale-[0.98]",
    outline: "bg-transparent border border-zinc-800 text-white hover:bg-zinc-900/50 hover:border-zinc-700 active:scale-[0.98]",
  };

  const combinedClassName = `${baseClassName} ${variantClassNames[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
