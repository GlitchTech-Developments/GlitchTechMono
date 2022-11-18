"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsArrowDownCircle } from "react-icons/bs";
import BannerBackground from "../../../images/GlitchTechBackground.webp";

interface IProps {
  Title: string;
  Description?: string;
  error?: any;
}

const Banner = (props: IProps) => {
  const Title = props.Title.toString();
  const Description = props.Description?.toString();
  const Error = props.error;

  const goToFirst = () => {
    if (window !== undefined) {
      window.scrollTo({
        top: window.screen.availHeight / 1.03,
        behavior: "smooth",
      });
    }
  };

  const BannerContent = () => {
    switch (Title) {
      case "Web":
        return (
          <>
            <h1 className="text-center font-mokoto_glitch_mk2 text-[2rem] leading-tight dark:text-white sm:text-[4rem] md:text-[4rem]">
              <span className="text-glitchtech">{Title}</span>
            </h1>
            <p className="mb-5 mt-6 font-mokoto_glitch text-[.8rem]">
              {Description ? Description : ""}
            </p>
          </>
        );
      case "Error":
        return (
          <>
            <h1 className="text-center font-mokoto_glitch_mk2 text-[2rem] leading-tight dark:text-white sm:text-[4rem] md:text-[4rem]">
              <span className="text-glitchtech">There was an error</span>
            </h1>
            <p className="mb-5 mt-6 font-mokoto_glitch text-[.8rem]">
              {Error ? Error : ""}
            </p>
          </>
        );
      case "NotFound":
        return (
          <>
            <h1 className="text-center font-mokoto_glitch_mk2 text-[2rem] leading-tight dark:text-white sm:text-[4rem] md:text-[4rem]">
              <span className="text-glitchtech">
                404 - Not Found
                <br />
                <small className="text-white"></small>
              </span>
            </h1>
            <p className="mb-5 mt-6 font-mokoto_glitch text-[.8rem]">
              {Error ? Error : ""}
            </p>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-center font-mokoto_glitch_mk2 text-[2rem] leading-tight dark:text-white sm:text-[4rem] md:text-[4rem]">
              <span className="text-glitchtech">
                GlitchTech
                <br />
                <small className="text-white">Developments</small>
              </span>
            </h1>
            <p className="mb-5 mt-6 font-mokoto_glitch text-[.8rem]">
              Web, Software, App and Game Developments
            </p>
          </>
        );
    }
  };

  const BannerInstance = () => {
    if (Title == "Home") {
      return (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url('${BannerBackground.src}')`,
          }}
        >
          <div className="hero-gradient hero-overlay"></div>
          <div className="hero-content flex flex-col text-center text-neutral-content">
            <div className="w-full flex-1">
              <BannerContent />
            </div>
            <div className="absolute bottom-6">
              <div
                className="text-[2rem] hover:text-[2.1rem] hover:text-white active:text-[2.1rem]"
                onClick={goToFirst}
              >
                <BsArrowDownCircle />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url('${BannerBackground.src}')`,
          }}
        >
          <div className="hero-gradient hero-overlay"></div>
          <div className="hero-content flex flex-col text-center text-neutral-content">
            <div className="w-full flex-1">
              <h1 className="text-center font-mokoto_glitch_mk2 text-[2rem] leading-tight dark:text-white sm:text-[4rem] md:text-[4rem]">
                <span className="text-glitchtech">{Title}</span>
                <br />
                <small className="text-white">{Description}</small>
              </h1>
            </div>
            <div className="absolute bottom-6">
              <button
                className="text-[2rem] hover:text-[2.1rem] hover:text-white"
                onClick={goToFirst}
              >
                <BsArrowDownCircle />
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return <BannerInstance />;
};
export default Banner;
