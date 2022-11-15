/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import BannerImage from "../../../../public/Images/GlitchTechBackground.webp";

const Banner = (props: any) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("/Images/GlitchTechBackground.webp")`,
      }}
    >
      <div className="hero-gradient hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-[2rem] font-extrabold leading-tight dark:text-white sm:text-[3rem] md:text-[4rem]">
            <span className="text-glitchtech">GlitchTech</span>
            <br />
            Developments
          </h1>
          <p className="mb-5 mt-6">Web, Software, App and Game Developments</p>
          <button className="btn border-none bg-black text-glitchtech opacity-80">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
