/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import ImageLoader from "../../utils/ImageLoader";

interface IProps {
  Title: string;
  Description: string | undefined;
}

const Banner = (props: IProps) => {
  const Title = props.Title.toString();
  const Description = props.Description?.toString();

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
          // style={{
          //   backgroundImage: `url('${BannerBackground.src}')`,
          // }}
        >
          <Image
            src={"/images/GlitchTechBackground.webp"}
            width={100}
            height={100}
            loader={ImageLoader}
            alt="GlitchTech Banner image"
            className="absolute h-screen w-full"
          />
          <div className="hero-gradient hero-overlay"></div>
          <div className="hero-content flex flex-col text-center text-neutral-content">
            <div className="w-full flex-1">
              <BannerContent />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="hero min-h-screen">
          <Image
            src={"/images/GlitchTechBackground.webp"}
            width={100}
            height={100}
            loader={ImageLoader}
            alt="GlitchTech Banner image"
            className="absolute h-screen w-full"
          />
          <div className="hero-gradient hero-overlay"></div>
          <div className="hero-content flex flex-col text-center text-neutral-content">
            <div className="w-full flex-1">
              <h1 className="text-center font-mokoto_glitch_mk2 text-[2rem] leading-tight dark:text-white sm:text-[4rem] md:text-[4rem]">
                <span className="text-glitchtech">{Title}</span>
                <br />
                <small className="text-white">{Description}</small>
              </h1>
            </div>
          </div>
        </div>
      );
    }
  };

  return <BannerInstance />;
};
export default Banner;
