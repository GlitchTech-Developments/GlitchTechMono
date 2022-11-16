import Logo from "../../../public/Images/GlitchTechLogoTransparent.png";

import Link from "next/link";
import Image from "next/image";
import { GrGithub /* GrLinkedin */ } from "react-icons/gr";
// import { SiSteam } from "react-icons/si";

const Footer = () => {
  const yearStamp = () => {
    const current = new Date().getFullYear().toString();
    const origin = "2022";

    if (current == origin) {
      return "2022";
    } else {
      return `2022-${current}`;
    }
  };

  return (
    <footer className="footer items-center border-t-[1px] border-glitchtech bg-black p-4 text-neutral-content dark:border-glitchtech">
      <div className="grid-flow-col items-center">
        <Link href={"#"} className="hover:text-glitchtech">
          <Image
            src={Logo}
            alt="GlitchTech Developments Logo"
            loading="eager"
            priority={true}
            className="w-36 select-none"
          />
        </Link>
        <p className="select-none">
          Copyright © {yearStamp()} | All right reserved
        </p>
      </div>
      <div className="hidden grid-flow-col gap-4 place-self-center justify-self-end md:block">
        <Link href={"#"} className="hover:text-glitchtech">
          <GrGithub className="text-2xl" />
        </Link>
        {/* <Link href={"#"}>
          <GrLinkedin className="text-2xl" />
        </Link> */}
        {/* <Link href={"#"}>
          <SiSteam className="text-2xl" />
        </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
