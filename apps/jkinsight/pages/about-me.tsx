import type { NextPage } from "next"
import { NextSeo } from "next-seo"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import TypedText from "../components/TypedText"

const AboutMe: NextPage = () => {
  return (
    <>
      <NextSeo title="About Me" />
      <div className="container">
        <span className="title">
          <h1 className="title-h1">About Me</h1>
          {/* <h5 className="sub-title">
            <small>Personal Portfolio</small>
          </h5> */}
        </span>

        <div className="typed-text-div-wrapper">
          <TypedText PageName="AboutMe" />
        </div>

        <div className="grid">
          <span className="card">
            <h2 style={{ textAlign: "center" }}>- About Me -</h2>
            <p style={{ textAlign: "center" }}>
              I Graduated in 2022 for Software Development and did I ever have a
              good time there, learned a lot of cool and interesting tech! Want
              to learn more about my professional and study experiences? Check
              out my LinkedIn below!
            </p>
          </span>
        </div>
        <div className="grid">
          <span className="card">
            <h2 style={{ textAlign: "center" }}>- Socials -</h2>
            <p style={{ textAlign: "center", paddingBottom: ".65rem" }}>
              Feel free to check on my socials
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: "2rem",
              }}
            >
              <a
                href="https://www.linkedin.com/in/jesse-koldewijn-5914531a3"
                target="_blank"
                rel="noreferrer"
                className="Link"
              >
                <AiFillLinkedin />
              </a>
              &nbsp;
              <a
                href="https://github.com/JesseKoldewijn"
                target="_blank"
                rel="noreferrer"
                className="Link"
              >
                <AiFillGithub />
              </a>
            </p>
          </span>
        </div>
      </div>
    </>
  )
}
export default AboutMe
