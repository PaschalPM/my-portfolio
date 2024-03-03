import Link from "next/link";
import React from "react";


export default function ConnectBtn() {
  return (
    <Link
      href={'/contact'}
      className="tracking-wide inline-block my-4 bg-gold border-gold px-4 py-2 rounded-2xl shadow-sm shadow-gold text-black font-semibold hover:bg-yellow-500"
    >
      Connect with me
    </Link>
  );
}
