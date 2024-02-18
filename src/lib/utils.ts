import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navList = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Skills",
    link: "/skills",
  },
  {
    label: "Works",
    link: "/works",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];
