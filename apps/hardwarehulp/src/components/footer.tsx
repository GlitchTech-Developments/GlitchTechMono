import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <section className="wrapper no-select">
        <div className="inner">
          <div className="special-footer">
            <h2>Heeft u nog vragen?</h2>
            <p>
              Dat snap ik wel. Neem alstublieft contact op als u vragen heeft.
            </p>
            <div className="w-full flex gap-4 items-center justify-center align-middle">
              Whatsapp{" "}
              <a href="https://wa.me/31642981933">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="icon"
                  style={{
                    color: "#ffa600",
                    fontSize: "35px",
                  }}
                />
              </a>
              E-mail{" "}
              <a href="mailto://jesse@hardwarehulp.nl">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="icon"
                  style={{
                    color: "#ffa600",
                    fontSize: "35px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="inner">
          <div className="content">
            <section>
              <div className="plain">
                <h3 className="no-select">Hardwarehulp</h3>
                <p className="no-select">
                  IT hulp aan huis
                  <br />
                  Ik help u graag met de volgende apparaten:
                  <br />
                  <i>computers, laptops, smartphones en tablets.</i>
                  <br />
                  Valt het apparaat waar u hulp voor zoekt hier niet onder?
                  <br />
                  Neem dan contact op.
                </p>
                <p
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "13px",
                  }}
                >
                  Kvk: <span>81511515</span>
                  <br />
                  IBAN: NL15 ABNA 0884 2883 74
                  <br />
                  Tel:
                  <a href="https://wa.me/31642981933"> +31 6 42 98 1933</a>
                </p>
              </div>
            </section>
            <section>
              <h4 className="no-select">Pagina&apos;s</h4>
              <div className="alt no-select flex flex-col gap-3">
                <Link href="/">Hoofdpagina</Link>
                <Link href="/diensten">Diensten</Link>
                <Link href="/tarieven">Tarieven</Link>
                <a rel="canonical" href="https://hhhost.nl">
                  Hosting
                </a>
              </div>
            </section>
            <section className="no-select">
              <h4>Volg mij!</h4>
              <ul className="plain no-select">
                <li>
                  <a
                    href="https://www.instagram.com/hardwarehulp/"
                    className="flex items-center"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="icon mb-1" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/hardwarehulp"
                    className="flex items-center"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="icon mb-1" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/hardwarehulp"
                    className="flex items-center"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="icon mb-1" />
                    Linkedin
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="copyright no-select">
            <span style={{ fontSize: 15 }}>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/">Hardwarehulp</a>
              {" 2021-" + new Date().getFullYear()} | IT hulp aan huis
            </span>
            <br />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
