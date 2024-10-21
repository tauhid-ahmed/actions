import cn from "classnames";

export type HeadingProps = {
  children: React.ReactNode;
  size: "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "left" | "right" | "center";
};

export default function Heading({
  as = "h1",
  size = "2xl",
  align = "left",
  children,
}: HeadingProps) {
  const Comp = as;
  const classnames = cn(
    "",
    {
      "text-4xl": size === "4xl",
      "text-3xl": size === "3xl",
      "text-2xl": size === "2xl",
      "text-xl": size === "xl",
      "text-lg": size === "lg",
      "text-md": size === "md",
      "text-base": size === "base",
      "text-sm": size === "sm",
    },
    {
      "text-left": align === "left",
      "text-right": align === "right",
      "text-center": align === "center",
    }
  );
  return <Comp className={classnames}>{children}</Comp>;
}
