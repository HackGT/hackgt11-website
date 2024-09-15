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
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
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

      <Main />

      <section id="about">
        <About />
      </section>
      <section id="tracks_and_challenges">
        <TracksChallenges />
      </section>

      {/* <Box h={64} /> */}

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
    </div>
  );
};

export default Home;
