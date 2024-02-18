"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { SetStateAction, Dispatch } from "react";
import { usePathname } from "next/navigation";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  navList: NavItem[];
};
export default function MenuDrawer({ isOpen, navList, setIsOpen }: Props) {
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        "transition relative sm:hidden bg-[#1a1c20]",
        { "opacity-0 -translate-y-2": !isOpen },
        { "opacity-100 translate-y-0 border-b border-gold": isOpen }
      )}
    >
      <ul className="container space-y-3 pb-4 text-lg">
        {navList.map(({ link, label }) => (
          <li
            key={label}
            className="hover:text-gold transition"
          >
            <Link
                onClick={() => setIsOpen(false)}
              href={link}
              className={clsx({
                "text-gold font-semibold": pathname === link,
              })}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
