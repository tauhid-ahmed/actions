import React from "react";
import cn from "classnames";

type ButtonProps = {
  size?: "base" | "sm" | "lg";
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  tone?: "bold" | "normal";
};

export default function ButtonComponent({
  size = "sm",
  variant = "secondary",
  children,
  onClick,
  tone = "normal",
}: ButtonProps) {
  const classnames = cn(
    "rounded",
    {
      "px-4 py-2": size === "base",
      "px-3 py-1": size === "sm",
      "px-6 py-3": size === "lg",
    },
    {
      "bg-blue-500 text-white": variant === "primary" && tone === "normal",
      "bg-blue-200 text-black": variant === "primary" && tone === "bold",
      "bg-gray-500 text-white": variant === "secondary" && tone === "normal",
      "bg-gray-200 text-black": variant === "secondary" && tone === "bold",
    }
  );
  return <button className={classnames}>Button</button>;
}
