import Image from "next/image";
// import { useTheme } from "../providers/ThemeProvider/ThemeProvider";

import { GrGithub /* GrLinkedin */ } from "react-icons/gr";
import { useEffect, useState } from "react";
import ImageLoader from "../../utils/ImageLoader";

const Header = () => {
  // const { ThemeToggleButton } = useTheme();
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
      <div className="navbar fixed top-0 z-50 bg-black">
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
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 border-[.1rem] border-glitchtech bg-black p-2 shadow"
              >
                <li className="menu-title">
                  <span style={{ color: "green" }}>Categories</span>
                </li>
                <li className="mt-2 rounded-xl border-[1px] border-stone-900 hover:bg-glitchtech hover:font-bold hover:text-black">
                  <a>Web</a>
                </li>
                <li className="mt-2 rounded-xl border-[1px] border-stone-900 hover:bg-glitchtech hover:font-bold hover:text-black">
                  <a>Software</a>
                </li>
                <li className="mt-1 rounded-xl border-[1px] border-stone-900 hover:bg-glitchtech hover:font-bold hover:text-black">
                  <a>Games</a>
                </li>
              </ul>
            </div>
          )}

          <a className="w-40">
            <Image
              src={"/images/GlitchTechLogoTransparent.png"}
              width={100}
              height={100}
              loader={ImageLoader}
              alt="GlitchTech Developments Logo"
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
                <a className="btn rounded-md bg-black">Games</a>
              </li>
            </ul>
          </div>
        )}
        <div className="navbar-end">
          <a className="btn bg-black py-1 px-3">
            <GrGithub className="h-auto w-4" />
          </a>
          {/* <div className="pr-2" />
          <a className="btn bg-black py-1 px-3">
            <GrLinkedin className="h-auto w-4" />
          </a> */}
          <div className="pr-2" />
          {/* <ThemeToggleButton /> */}
        </div>
      </div>
    </>
  );
};
export default Header;
