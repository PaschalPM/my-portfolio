import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  text: string;
};

export default function DownloadBtn({ href, text }: Props) {
  return (
    <Link
      href={href}
      download={true}
      className="tracking-wide bg-gold border-gold px-4 py-2 rounded-2xl shadow-sm shadow-gold text-black font-semibold hover:bg-yellow-500"
    >
      {text}
    </Link>
  );
}
