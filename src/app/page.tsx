import React from "react";
import Image from "next/image";
import HomeBody from "@/components/HomeBody";
import Section from "@/components/Section";

export default function Home() {
  return (
    <Section className="block md:flex justify-between">
      <div className="w-full md:max-w-[600px]">
        <HomeBody />
      </div>
      <div className="max-w-[450px] hidden md:block ">
        <Image
          width={300}
          height={100}
          priority
          src={"/images/MyImageWithGoldBg.png"}
          alt="My Image"
        />
      </div>
    </Section>
  );
}
