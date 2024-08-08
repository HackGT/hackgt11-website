import type { NextPage } from "next";
import Head from "next/head";
import About from "../src/components/about/About";
import Faq from "../src/components/faq/Faq";
import Main from "../src/components/main/Main";
import Sponsors from "../src/components/sponsors/Sponsors";
import TracksChallenges from "../src/components/tracks_and_challenges/TracksChallenges";

import links from "../src/components/navbar/nav.json";
import Navbar from "../src/components/navbar/Navbar";
import Schedule from "../src/components/schedule/Schedule";
import Footer from "../src/components/footer/Footer";
import CarnivalMain from "../src/components/carnival_main/CarnivalMain";
import { Box } from "@chakra-ui/react";
import { default as carvnivalStyles } from "../src/components/carnival_main/CarnivalMain.module.scss";
import { default as mainStyles } from "../src/components/main/Main.module.scss";
import { default as navbarStyles } from "../src/components/navbar/Navbar.module.scss";
import { useState } from "react";

const Home: NextPage = () => {
  const handleClick = () => {

    document.getElementById("titleBox")?.classList.add(carvnivalStyles.fade_out);

    setTimeout(() => {
      document.getElementById('curtains')?.classList.add(carvnivalStyles.zoom_start);
      document.getElementById("top")?.classList.add(carvnivalStyles.bring_to_front, carvnivalStyles.zoom_start);

    }, 700);

    setTimeout(() => {
      document.getElementById("mainHeader")?.classList.remove(mainStyles.hidden);
    }, 2400);

    setTimeout(() => {
      document.getElementById("carnivalMain")?.classList.add(carvnivalStyles.fade_out);
    }, 2700);

    setTimeout(() => {
      setShowingMain(true);
    }, 3500)

    setTimeout(() => {
      document.getElementById("navbar")?.classList.remove(navbarStyles.hidden);
    }, 4000);
  }

  // const [component, setComponent] = useState<JSX.Element | null>(<CarnivalMain handleClick={handleClick} />);
  const [showingMain, setShowingMain] = useState(false);


  return (
    <div className="circus_bg">
      <Head>
        <title>HackGT 11: Circus of Invention</title>
        <meta name="description" content="Circus of Invention" />
        <link
          rel="icon"
          type="image/png"
          href="/icon/logo/hackgt11-512x512.png"
        />
      </Head>

      <Navbar anchors={links.components} />


      {
        !showingMain &&
        <CarnivalMain handleClick={handleClick} />
      }

      <Main />

      {
        showingMain &&
        (
          <>
            <section id="about">
              <About />
            </section>
            <section id="tracks_and_challenges">
              <TracksChallenges />
            </section>
            <section id="schedule">
              <Schedule />
            </section>
            <section id="faq">
              <Faq />
            </section>
            <section id="sponsors">
              <Sponsors />
            </section>
            <section id="footer">
              <Footer />
            </section>
          </>
        )}
    </div>
  );
};

export default Home;
