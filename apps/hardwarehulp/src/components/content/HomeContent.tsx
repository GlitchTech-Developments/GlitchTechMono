/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"

const HomeContent = () => {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickRouter = (e: any, link: string) => {
    e.preventDefault()
    router.push(link)
  }

  return (
    <>
      <section className="wrapper" style={{ paddingTop: "3rem" }}>
        <div className="inner">
          <header className="special no-select">
            <h2>Waar kan ik u mee van dienst zijn?</h2>
            <p>
              Alle diensten die ik aanbied worden uitgebreider uitgelegd op de
              &quot;Diensten&quot; pagina.
            </p>
          </header>

          <div className="highlights">
            <section>
              <div
                className="content btn-highlights"
                onClick={(e) => clickRouter(e, "diensten#com-mobile")}
              >
                <div>
                  <a className="icon fa-wrench">
                    <span className="label">Icon</span>
                  </a>
                  <h3>Computer op maat</h3>
                </div>
                <p>
                  Computer speciaal op maat voor uw gebruik. Bij u thuis in
                  elkaar gezet, geïnstalleerd.
                </p>
              </div>
            </section>
            <section>
              <div
                className="content btn-highlights"
                onClick={(e) => clickRouter(e, "diensten#com-ondersteuning")}
              >
                <div>
                  <a className="icon fa-life-bouy">
                    <span className="label">Icon</span>
                  </a>
                  <h3>Ondersteuning</h3>
                </div>
                <p>
                  Heeft u problemen met bepaalde apparaten aan de praat krijgen?
                  dan kan ik u hier ook mee helpen.
                </p>
              </div>
            </section>
            <section>
              <div
                className="content btn-highlights"
                onClick={(e) => clickRouter(e, "diensten#com-advies")}
              >
                <div>
                  <a className="icon fa-search">
                    <span className="label">Icon</span>
                  </a>
                  <h3>Aankoop advies</h3>
                </div>
                <p>
                  Advisering van de aankoop van elektronica zoals computers,
                  laptops, smartphones etc.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section
        className="wrapper no-select"
        style={{ marginTop: "0px", paddingTop: "2rem" }}
      >
        <div className="inner">
          <div
            className="special"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h2 style={{ marginLeft: "auto", marginRight: "auto" }}>
              Wie is Hardwarehulp
            </h2>
            <p
              style={{
                maxWidth: "800px",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              Goedendag en bedankt dat u een kijkje neemt op mijn website. Na
              ruim een jaar in de IT ondersteuningswereld gewerkt te hebben
              merkte ik dat plaatselijk in Kampen een tekort is aan een
              specifieke behoefte, betaalbare IT hulp aan huis zowel software
              als hardwarematig. Door dit tekort aan opties ben ik begonnen
              namens Hardwarehulp lokaal in Kampen, Overijssel.
            </p>
            <div
              className="author"
              style={{
                paddingBottom: "3rem",
              }}
            >
              <div className="image">
                <div
                  style={{
                    alignContent: "center",
                    paddingTop: "5px",
                  }}
                >
                  <img
                    src="img/Jesse.webp"
                    alt="Jesse Koldewijn, Eigenaar Hardwarehulp"
                  />
                </div>
              </div>
              <p className="credit">
                <a
                  href="https://www.linkedin.com/in/jesse-koldewijn-5914531a3/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#ffa600",
                    fontWeight: "bold",
                  }}
                >
                  Jesse Koldewijn
                </a>
                <br />
                <span>
                  <a
                    href="https://www.linkedin.com/company/hardwarehulp"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    rel="noreferrer"
                  >
                    Hardwarehulp
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="wrapper no-select middle">
        <div className="inner">
          <h2>Transparantie staat voorop!</h2>
          <p style={{ color: "white" }}>
            Wat bedoel ik met transparantie? Transparant zijn zie ik zowel als
            eerlijk en open omgaan met feedback, maar ook om zo open mogelijk te
            zijn over de prijs/uurtarief die een afspraak zal gaan kosten. Om zo
            transparant mogelijk met feedback om te gaan wijs ik na elke eerste
            afspraak u op het feit dat u mij kunt beoordelen op Trustpilot.
            Hieronder kunt u mijn Trustpilot pagina en beoordeling vinden.
          </p>
          <div className="NotMobile">
            <a
              rel="canonical noreferrer"
              href="https://nl.trustpilot.com/review/hardwarehulp.nl"
              className="button primary"
              style={{
                color: "#009565",
                marginBottom: "20px",
              }}
              target="_blank"
            >
              Bekijk mijn pagina
            </a>
            <br className="spacer" />
            <a
              href="https://nl.trustpilot.com/evaluate/hardwarehulp.nl"
              className="button primary"
              style={{ color: "#009565", marginBottom: "20px" }}
              target="_blank"
              rel="noreferrer"
            >
              Plaats een review
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeContent
