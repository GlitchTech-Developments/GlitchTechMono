import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import Banner from "../components/banner"

const FourOhFour = () => {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickRouter = (e: any, link: string) => {
    e.preventDefault()

    if (link == "back") {
      router.back()
    } else if (link == "home") {
      router.push("/")
    }
  }

  return (
    <>
      <NextSeo title="404" />
      <Banner
        title="Niet Gevonden"
        desc="Pagina die U probeerde te bereiken was niet gevonden"
      />
      <div className="wrapper" style={{ display: "flex" }}>
        <div
          className="inner"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "auto",
            height: "15rem",
          }}
        >
          <h2>Suggesties om te openen</h2>
          <div
            className="inner-wrap"
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <div
              onClick={(e) => clickRouter(e, "home")}
              className="button primary"
              style={{
                color: "#009565",
                marginBottom: "20px",
                marginRight: "auto",
                width: "8rem",
                height: "3.2rem",
              }}
            >
              Home
            </div>
            <div
              onClick={(e) => clickRouter(e, "back")}
              className="button primary"
              style={{
                color: "#009565",
                marginBottom: "20px",
                marginLeft: "auto",
                width: "8rem",
                height: "3.2rem",
              }}
            >
              Terug
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FourOhFour
