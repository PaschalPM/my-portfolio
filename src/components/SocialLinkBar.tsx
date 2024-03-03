import SocialLink from "./SocialLink";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function SocialLinkBar() {
  return (
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
      <SocialLink
        href="https://wa.link/imz9rt"
        socialIcon={<FaWhatsapp />}
      />
    </div>
  );
}
