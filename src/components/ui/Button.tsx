import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "filled" | "outline" | "minimal-white" | "outline-accent";
  href?: string;
  target?: string;
  rel?: string;
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
    "inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none motion-reduce:transition-none";

  const variantClassNames = {
    filled: "bg-accent text-accent-text hover:opacity-90",
    outline:
      "bg-transparent border border-zinc-800 text-white hover:bg-zinc-900/50 hover:border-zinc-700",
    "minimal-white":
      "bg-white/[0.04] border border-white/20 text-white hover:text-white/60 hover:border-white/10 hover:bg-transparent transition-all duration-300",
    "outline-accent":
      "bg-transparent border border-accent text-accent hover:bg-accent hover:text-accent-text hover:shadow-[0_0_20px_var(--color-accent-glow)] hover:scale-[1.02] transition-all duration-300 ease-out",
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
