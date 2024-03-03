import AppButton from "@/components/AppButton";
import FormInput from "@/components/FormInput";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return <Section className="flex pt-28">
    <div className="flex-[1_0_0] hidden md:block">
      <div className="w-3/4 m-auto">
      <Typography variant="h2" className="mt-4">
      Let's chat.
      <br />
      Tell me about your project.
      </Typography>
      <Typography className="my-8"> Let us create something together 🤟</Typography>
      <Link href="mailto:okaforpaschal018@gmail.com" className="flex items-center gap-3 p-4 shadow-sm shadow-gold">
        <div className="size-8 flex items-center justify-center bg-gold">
          <span className="text-yellow-100">
          ✉
          </span>
        </div>
        <p className="text-xs leading-4">
          Mail me at <br />okaforpaschal018@gmail.com
        </p>
      </Link>
      </div>
    </div>
    <div className="flex-[1_0_0]">
      <form action="" className="mx-auto sm:w-3/4 ">
      <Typography variant="h3" className="my-2"> Send me a message 🚀</Typography>
      <FormInput placeholder="Your name*" name="fullName" required/>
      <FormInput placeholder="Your email*" name="email" required/>
      <FormInput placeholder="Your message*" name="email" required textArea/>
      <AppButton submitForm/>
      </form>
    </div>
  </Section>;
}
