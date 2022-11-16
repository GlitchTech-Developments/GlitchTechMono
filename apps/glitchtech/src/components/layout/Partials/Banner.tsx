/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const Banner = (props: any) => {
  const Title = props.Title.toString();

  const BannerInstance = () => {
    if (Title !== undefined || Title !== "Home") {
      return (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("/Images/GlitchTechBackground.webp")`,
          }}
        >
          <div className="hero-gradient hero-overlay"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-full">
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
              <button className="btn border-none bg-black text-glitchtech opacity-80">
                Get Started
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("/Images/GlitchTechBackground.webp")`,
          }}
        >
          <div className="hero-gradient hero-overlay"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-full">
              <h1 className="text-center font-mokoto_glitch_mk2 text-[2rem] leading-tight dark:text-white sm:text-[4rem] md:text-[4rem]">
                <span className="text-glitchtech">{Title}</span>
              </h1>
              <p className="mb-5 mt-6 font-mokoto_glitch text-[.8rem]">
                Web, Software, App and Game Developments
              </p>
              <button className="btn border-none bg-black text-glitchtech opacity-80">
                Get Started
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
