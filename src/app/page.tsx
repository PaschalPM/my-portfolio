import React from "react";
import Image from "next/image";
import HomeBody from "@/components/HomeBody";

export default function Home() {
  return (
    <section className="w-full h-screen block md:flex justify-between container lg:px-28 pt-40 sm:pt-28 fadeIn">
      <div className="w-full md:max-w-[600px]">
        <HomeBody/>
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
    </section>
  );
}
