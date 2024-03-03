import clsx from "clsx";
import Link from "next/link";
import React, { HTMLAttributes, InputHTMLAttributes } from "react";

const cls = "tracking-wide bg-gold border-gold px-4 py-2 rounded-2xl shadow-sm shadow-gold text-black font-semibold hover:bg-yellow-500"

type Props = {
  connectWithMe?: boolean,
  downloadCv?: boolean,
  submitForm?: boolean,
  attr?: HTMLAttributes<HTMLButtonElement>,
  className?: string
}
export default function AppButton({connectWithMe, downloadCv, submitForm, attr, className}: Props) {
  if (downloadCv){
    return (
      <Link
      href={"/pdfs/Paschal-Okafor-CV-FullStackWebDeveloper.pdf"}
      download={true}
      className={cls}
    >
      Download CV
    </Link>
    )
  }
  if (connectWithMe){
    return (
      <Link
      href={'/contact'}
      className={clsx("inline-block my-4",cls)} 
      >
      Connect with me
    </Link>
  )
  }
  
  if (submitForm){
      return (
        <button {...attr} className={clsx(cls, "w-full rounded-none", className)}> 
          Send Message
        </button>
      )
  } 
}
