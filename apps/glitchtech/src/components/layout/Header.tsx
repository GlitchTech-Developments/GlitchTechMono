import Image from "next/image";
import { useTheme } from "../providers/ThemeProvider/ThemeProvider";

import Logo from "../../../public/Images/GlitchTechLogoTransparent.png";

const Header = () => {
  const { ThemeToggleButton } = useTheme();
  return (
    <>
      <div className="navbar absolute top-0 bg-black">
        <div className="navbar-start">
          <a className="w-40">
            <Image
              src={Logo}
              alt="GlitchTech Developments Logo"
              loading="eager"
            />
          </a>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="rounded-md bg-black">
              <a>Web</a>
            </li>
            <li className="ml-2 rounded-md bg-black">
              <a>Software</a>
            </li>
            <li className="ml-2 rounded-md bg-black">
              <a>Gaming</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-black">Get started</a>
          <div className="pr-2" />
          <ThemeToggleButton />
        </div>
      </div>
    </>
  );
};
export default Header;
