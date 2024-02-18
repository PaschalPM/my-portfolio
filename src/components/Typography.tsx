import clsx, { ClassValue } from "clsx";
import React, { PropsWithChildren } from "react";

type Props = {
  variant?: string;
  className?: ClassValue;
  style?: React.CSSProperties;
} & PropsWithChildren;
export default function Typography({
  variant,
  children,
  className,
  style,
}: Props) {
  if (variant === "h3") {
    return (
      <h3 className={clsx("text-xl font-semibold", className)} style={style}>
        {children}
      </h3>
    );
  }
  if (variant === "h1") {
    return (
      <h1
        className={clsx("text-3xl md:text-5xl font-semibold", className)}
        style={style}
      >
        {children}
      </h1>
    );
  }
  return (
    <p className={clsx(className)} style={style}>
      {children}
    </p>
  );
}
