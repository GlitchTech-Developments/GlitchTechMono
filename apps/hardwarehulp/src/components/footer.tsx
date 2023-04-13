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
            Whatsapp&nbsp;{" "}
            <a
              href="https://wa.me/31642981933"
              className="icon fa-whatsapp"
              style={{ fontSize: "35px", paddingRight: "15px" }}
            >
              <span className="label">Whatsapp</span>
            </a>
            E-mail&nbsp;{" "}
            <a
              href="mailto://jesse@hardwarehulp.nl"
              className="icon fa-envelope-o"
              style={{ fontSize: "35px", paddingRight: "15px" }}
            >
              <span className="label">Mail</span>
            </a>
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
              <ul className="alt no-select">
                <li>
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a href="/">Hoofdpagina</a>
                </li>
                <li>
                  <a href="/diensten">Diensten</a>
                </li>
                <li>
                  <a href="/tarieven">Tarieven</a>
                </li>
                <li>
                  <a rel="canonical" href="https://hhhost.nl">
                    Hosting
                  </a>
                </li>
              </ul>
            </section>
            <section className="no-select">
              <h4>Volg mij!</h4>
              <ul className="plain no-select">
                <li>
                  <a href="https://www.instagram.com/hardwarehulp/">
                    <i className="icon fa-instagram">&nbsp;</i>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/hardwarehulp">
                    <i className="icon fa-facebook">&nbsp;</i>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/hardwarehulp">
                    <i className="icon fa-linkedin">&nbsp;</i>
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
