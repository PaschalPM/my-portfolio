import clsx from "clsx";
import {ClassValue} from "clsx";
import React, { PropsWithChildren } from "react";

type Props = {
    className?: ClassValue
} & PropsWithChildren
export default function Section({ children, className }: Props) {
  return (
    <section className={clsx("w-full h-screen container lg:px-28 pt-44 sm:pt-36 fadeIn", className)}>
      {children}
    </section>
  );
}
