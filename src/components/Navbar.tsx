"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import MenuDrawer from "./MenuDrawer";

type Props = {
  navList: NavItem[];
};
const Navbar = ({ navList }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed z-50 top-0 left-0 w-full">
      <nav className="flex justify-between items-center container lg:px-28 py-4 z-10 bg-[#1a1c20]">
        <Link
          href="/"
          className="text-xl font-semibold cursor-default slideInRight"
        >
          Portfolio<span className="text-gold font-bold">.</span>
        </Link>
        <button className="sm:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </button>
        <ul className="hidden sm:block">
          {navList.map(({ link, label }, idx) => (
            <li
              key={label}
              className="inline-block ml-8 hover:text-gold transition"
            >
              <Link
                href={link}
                className={clsx("slideInTop", {
                  "text-gold font-semibold": pathname === link,
                })}
                style={{ "--animation-delay": idx.toString() } as React.CSSProperties}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <MenuDrawer isOpen={isOpen} navList={navList} setIsOpen={setOpen} />
    </header>
  );
};

export default Navbar;
