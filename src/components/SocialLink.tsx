import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  socialIcon: ReactNode;
  href: string;
};
export default function SocialLink({ socialIcon, href }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex w-10 h-10 bg-transparent border-2 border-gold rounded-full text-gold items-center justify-center my-5 mr-2 transition ease-in hover:bg-gold hover:text-black hover:shadow-lg hover:shadow-gold"
    >
      {socialIcon}
    </Link>
  );
}
