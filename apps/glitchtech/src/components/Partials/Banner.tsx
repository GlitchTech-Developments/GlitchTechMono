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
      case "Web Developments":
        return (
          <>
            <h1 className="text-center font-mokoto_glitch_mk2 text-[2rem] leading-tight dark:text-white sm:text-[3rem] md:text-[4rem]">
              <span className="text-glitchtech">{Title}</span>
            </h1>
            <p className="mb-5 mt-6 font-mokoto_glitch text-[.8rem] ">
              {Description ? Description : ""}
            </p>
          </>
        );
      default:
        return (
          <>
            <h1 className="text-center font-mokoto_glitch_mk2 text-[2rem] leading-tight dark:text-white sm:text-[3rem] md:text-[4rem]">
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
    return (
      <div className="hero mt-[4rem] max-h-screen w-full sm:max-h-screen md:max-h-screen lg:h-full">
        <Image
          src={
            "https://glitchtech.vercel.app/images/GlitchTechBackgroundDropoff.webp"
          }
          width={100}
          height={100}
          loader={ImageLoader}
          priority={true}
          alt="GlitchTech Banner image"
          className="h-max-h-screen gt_bottom_fade_dark w-full sm:max-h-screen md:max-h-screen lg:h-full"
        />

        <div className="hero-gradient h-max-h-screen sm:max-full hero-overlay w-full md:max-h-full lg:h-full"></div>
        <div className="hero-content flex flex-col text-center text-neutral-content">
          <div className="mx-6 w-full flex-1">
            <BannerContent />
          </div>
        </div>
      </div>
    );
  };

  return <BannerInstance />;
};
export default Banner;
