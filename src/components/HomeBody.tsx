"use client";
import React from "react";
import Typography from "./Typography";
import SocialLink from "./SocialLink";
import { FaFacebookF } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import DownloadBtn from "./DownloadBtn";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
      <div className="mb-4">
        <SocialLink
          href="https://www.facebook.com/paschal.okafor3?sfnsn=scwspwa&mibextid=RUbZ1f"
          socialIcon={<FaFacebookF />}
        />
        <SocialLink
          href="https://github.com/PaschalPM"
          socialIcon={<FiGithub />}
        />
        <SocialLink
          href="https://www.linkedin.com/in/paschal-okafor-24877917a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          socialIcon={<FiLinkedin />}
        />
      </div>

      <DownloadBtn
        href="/pdfs/Paschal-Okafor-CV-FullStackWebDeveloper.pdf"
        text="Download CV"
      />
    </>
  );
}
