import type { NextPage } from "next";
import { NextSeo } from "next-seo";
//import Image from "next/image"
import styles from "../styles/Home.module.scss";

import { FaSpotify, FaInstagram, FaTwitter } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <a href="https://protest-protocol.glitchtech.eu">
              Protest Protocol
            </a>
          </h1>

          <p className={styles.description}>
            A 20 year old Drum and Bass producer from the Netherlands.
          </p>

          <div className={styles.grid}>
            <a
              href="https://open.spotify.com/artist/2K6Jgh8vcpHF5UAULzkFpC"
              className={styles.cardSpotify}
            >
              <FaSpotify /> Spotify
            </a>
            <a
              href="https://www.instagram.com/ProtestProtocol"
              className={styles.cardInstagram}
            >
              <FaInstagram /> Instagram
            </a>
            <a
              href="https://twitter.com/ProtestProtocol"
              className={styles.cardTwitter}
            >
              <FaTwitter /> Twitter
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <span>
            Powered by&nbsp;
            <a
              href="https://glitchtech.eu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GlitchTech Developments
            </a>
          </span>
        </footer>
      </div>
    </>
  );
};

export default Home;
