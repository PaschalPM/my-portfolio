import clsx from "clsx";
import React from "react";

const className="border border-gray-300 px-4 py-2 w-full my-2 rounded-md focus:outline-none focus:border-gold bg-neutral-700"
type Props = {
  placeholder: string;
  name: string,
  type?: string;
  textArea?: boolean;
  required?: boolean
};

export default function FormInput({ placeholder, name, type = "text", textArea, required }: Props) {
    if (textArea){
        return <textarea name={name} id={name} rows={6} className={clsx(className)} placeholder={placeholder}></textarea>
    }
    return (
        <input type={type} className={clsx(className)} placeholder={placeholder} required={required} name={name} id={name}/>
    );
}
