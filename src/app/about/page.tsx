import Image from "next/image";

export default function About() {
  return (
    <div className="ml-auto">
      <Image
        src="/images/my_image.png"
        alt="My Image"
        width={350}
        height={100}
        priority
      />
    </div>
  );
}
