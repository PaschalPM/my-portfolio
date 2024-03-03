import AboutBody from "@/components/AboutBody";
import Section from "@/components/Section";
import Image from "next/image";


export default function About() {
  return (
    <Section className="block md:flex flex-wrap gap-8 pt-24">
      <div className="flex-[0.5_0_0] flex justify-center md:block mb-4">
        <Image
          src="/images/MyImageWithBorder.png"
          alt="My Image"
          width={200}
          height={150}
          priority
        />
      </div>
      <div className="flex-[1_0_200px] text-center md:text-left">
        <AboutBody/>
      </div>
    </Section>
  );
}
