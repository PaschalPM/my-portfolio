"use client";
import React from "react";
import Typography from "./Typography";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import AppButton from "./AppButton";
import SocialLinkBar from "./SocialLinkBar";

export default function HomeBody() {
  const [typeEffect] = useTypewriter({
    words: [
      "Web Developer",
      "Nextjs Developer",
      "Vuejs Developer",
      "Nodejs Developer",
      "Laravel Developer",
      "Django Developer",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <>
      <Typography variant="h3" className="mb-1 slideInBottom">
        Hello, It&apos;s Me
      </Typography>
      <Typography
        variant="h1"
        className="mb-1"
      >
        Paschal Okafor
      </Typography>
      <Typography variant="h3" className="mb-4">
        And I&apos;m a <span className="text-gold font-mono"> {typeEffect}<Cursor cursorColor='white' /> </span>
      </Typography>
      <p className="mb-4">
        Experienced full stack developer proficient in Laravel, React.js,
        Node.js, and more, dedicated to delivering seamless user experiences and
        scalable solutions.
      </p>
      <SocialLinkBar/>
      <AppButton downloadCv/>
    </>
  );
}
