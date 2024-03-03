import Typography from "./Typography";
import Link from "next/link";
import AppButton from "@/components/AppButton";

export default function AboutBody() {
 
  return (
    <>
      <Typography variant="h2" className="tracking-wide">
          About Me
        </Typography>
        <br />
        <div>
          <Typography>Welcome to my portfolio!</Typography>
          <br />
          <Typography>
            I'm Paschal Okafor, a full-stack developer skilled in Laravel, Django,
            Next.js, Vue.js,TypeScript, TailwindCSS, PHP, Python, Firebase, and more. Currently, I'm an IT
            administrator/web developer at Troloppe Property Services, where
            I've led the development of web applications like
            <Link href="https://troloppe.com" className="text-blue-300">
              {" "}
              www.troloppe.com{" "}
            </Link>{" "}
            and{" "}
            <Link href="https://thesquareoffices.com" className="text-blue-300">
              {" "}
              www.thesquareoffices.com
            </Link>
            .
          </Typography>
          <br />
          <Typography>
            With a passion for innovation and problem-solving, I excel in
            architecting robust systems and crafting dynamic interfaces. This
            portfolio showcases my projects and skills.
          </Typography>
          <br />
          <Typography>
            Let's connect and explore opportunities together!
          </Typography>
          <AppButton connectWithMe/>
        </div>
    </>
  );
}
