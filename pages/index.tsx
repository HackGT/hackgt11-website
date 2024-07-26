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
import { useState } from "react";
const Home: NextPage = () => {
  const handleClick = () => {
    document.getElementById('curtains')?.classList.add(carvnivalStyles.zoom_start);
    document.getElementById("top")?.classList.add(carvnivalStyles.bring_to_front, carvnivalStyles.zoom_start);

    document.getElementById("titleBox")?.classList.add(carvnivalStyles.fade_out);

    setTimeout(() => {
      setComponent(<Main />);
    }, 5000)
  }

  const [component, setComponent] = useState<JSX.Element | null>(<CarnivalMain handleClick={handleClick} />);


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
      {/* <Navbar anchors={links.components} /> */}

      {/* <Main /> */}
      {/* <CarnivalMain handleClick={handleClick} /> */}
      {component}

      {
        component === <Main /> &&
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
