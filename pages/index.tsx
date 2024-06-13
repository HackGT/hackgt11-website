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

const Home: NextPage = (props) => {
  return (
    <div className="main">
      <Head>
        <title>HackGT X: A journal of memories</title>
        <meta name="description" content="Time for a blast to the past" />
        <link
          rel="icon"
          type="image/png"
          href="/icon/logo/hackgtx-512x512.png"
        />
      </Head>
      <Navbar anchors={links.components} />

      <section id="home">
        <Main toJump="#registration" />
      </section>
      <br />
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
    </div>
  );
};

export default Home;
