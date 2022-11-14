import Image from "next/image";
import { useTheme } from "../providers/ThemeProvider/ThemeProvider";

import Logo from "../../../public/Images/GlitchTechLogoTransparent.png";

import { GrGithub, GrLinkedin } from "react-icons/gr";
import { useEffect, useState } from "react";

const Header = () => {
  const { ThemeToggleButton } = useTheme();
  const [currentWindow, setCurrentWindow] = useState({
    w: 0,
    h: 0,
  });

  useEffect(() => {
    setCurrentWindow({
      w: window.innerWidth,
      h: window.innerHeight,
    });

    const subscription = () => {
      setCurrentWindow({
        w: window.innerWidth,
        h: window.innerHeight,
      });
    };
    window.addEventListener("resize", subscription);

    return () => {
      window.removeEventListener("resize", subscription);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="navbar absolute top-0 bg-black">
        <div className="navbar-start">
          {currentWindow.w < 715 && (
            <div className="dropdown">
              <label tabIndex={0} className="btn-ghost btn lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          )}

          <a className="w-40">
            <Image
              src={Logo}
              alt="GlitchTech Developments Logo"
              loading="eager"
            />
          </a>
        </div>
        {currentWindow.w > 715 && (
          <div className="navbar-center lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a className="btn rounded-md bg-black">Web</a>
              </li>
              <li className="ml-2">
                <a className="btn rounded-md bg-black">Software</a>
              </li>
              <li className="ml-2">
                <a className="btn rounded-md bg-black">Gaming</a>
              </li>
            </ul>
          </div>
        )}
        <div className="navbar-end">
          <a className="btn bg-black py-1 px-3">
            <GrGithub className="h-auto w-4" />
          </a>
          <div className="pr-2" />
          <a className="btn bg-black py-1 px-3">
            <GrLinkedin className="h-auto w-4" />
          </a>
          <div className="pr-2" />
          <ThemeToggleButton />
        </div>
      </div>
    </>
  );
};
export default Header;
