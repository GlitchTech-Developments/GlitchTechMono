/* eslint-disable @typescript-eslint/no-explicit-any */
const ImageLoader = ({ src, width, quality }: any) => {
  const url = new URL(src)
  let loaderString = `?w=${width}&q=${quality || 76}`

  const DomainCheck = () => {
    let checkedURL = src
    const domain = url.hostname
    const local = ["hardwarehulp.nl", "www.hardwarehulp.nl"]

    local.find((value) => {
      if (value == domain) {
        checkedURL = `https://hardwarehulp.nl${url.pathname}`
      } else {
        if (url.search) {
          checkedURL = `https://${domain + url.pathname + url.search}`
          loaderString = `&w=${width}&q=${quality || 75}`
        } else {
          checkedURL = `https://${domain + url.pathname}`
        }
      }
    })
    return checkedURL
  }

  return `${DomainCheck() + loaderString}`
}

export default ImageLoader
