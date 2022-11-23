/* eslint-disable @typescript-eslint/no-explicit-any */
const ImageLoader = ({ src, width, height, quality }: any) => {
  let url: URL | any = null;

  if (src.startsWith("/") == false) {
    url = new URL(src);
  } else {
    const origin =
      typeof window !== "undefined" && window.location.origin
        ? window.location.origin
        : "http://localhost:3000";
    url = new URL(origin + src);
  }

  let loaderString = `?w=${width}&h=${height ? height : "auto"}&q=${
    quality || 76
  }`;

  const DomainCheck = () => {
    let checkedURL = src;
    const domain = url.hostname;
    const local = ["glitchtech.eu", "www.glitchtech.eu", "localhost"];

    local.find((value) => {
      if (value == domain) {
        if (process.env.NEXT_APP_ENV == "development") {
          checkedURL = `http://localhost:3000${url.pathname}`;
        } else {
          checkedURL = `https://glitchtech.vercel.app${url.pathname}`;
        }
      } else {
        if (url.search) {
          checkedURL = `https://${domain + url.pathname + url.search}`;
          loaderString = `&w=${width}&h=${height ? height : "auto"}&q=${
            quality || 75
          }`;
        } else {
          checkedURL = `https://${domain + url.pathname}`;
        }
      }
    });
    return checkedURL;
  };

  return `${DomainCheck() + loaderString}`;
};

export default ImageLoader;
