import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

// ---
// Button component that conditionally renders as either:
// - <button> (for form actions or client events)
// - <Link> (for internal navigation using Next.js)
// Based on whether the `href` prop is present.
// ---

// Shared props for both button and link versions
interface BaseProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

// Button rendered as a Next.js <Link>
type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never; // ensures no accidental event use on Link
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "type">;

// Standard HTML <button>
type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

// Unified ButtonProps type
type ButtonProps = ButtonAsLink | ButtonAsButton;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  // Combine base + variant + any custom class names
  const classes = `${styles.button} ${styles[variant]} ${className}`;

  // If an `href` is provided, render a Next.js <Link>
  // `props.href!` uses a non-null assertion because we’ve type-guarded above
  if ("href" in props) {
    return (
      <Link href={props.href!} className={classes}>
        {children}
      </Link>
    );
  }

  // Otherwise, render a native <button>
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
