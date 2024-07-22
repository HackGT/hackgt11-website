import React from "react";
import { Box, Center, Image, Heading, Spacer } from "@chakra-ui/react";
import styles from "./Schedule.module.scss";

const Schedule = () => {
  return (
    <Box className={styles.schedule}>
      <Image
        className={styles.schedule_board}
        src="/svg/schedule/schedule_board_temp.svg"
        alt="schedule board"
      />
      {/* <Image
        className={styles.schedule_decor}
        src="/svg/schedule/schedule_decor.svg"
        alt="schedule decor"
      /> */}
      <Image
        className={styles.grass_s1}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
      {/* <Image
        className={styles.grass_s2}
        src="/svg/about/grass2.svg"
        alt="grass"
      /> */}
      <Image
        className={styles.merry_go_round}
        src="/svg/schedule/merry-go-round.svg"
        alt="merry go round"
      />
      <Image
        className={styles.beardell_bike}
        src="/svg/schedule/beardell_bike.svg"
        alt="beardell on a bike"
      />
      <Image
        className={styles.grass_s3}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
      <Image
        className={styles.grass_s4}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
      {/* <Box
        display="grid"
        justifyContent="center"
        alignContent="center"
        width="50%">
        <Spacer gridArea="1 / 1" height="20vw" />
        <Image
          src="/img/schedule/tickets.png"
          alt="schedule"
          gridArea="2 / 1"
          textAlign="center"
        />
        <Heading
          textAlign="center"
          alignSelf="center"
          fontSize={{ sm: "20px", lg: "35px" }}>
          <a href="https://live.hexlabs.org">Interest Form</a>
        </Heading>
      </Box> */}
    </Box>
  );
};

export default Schedule;
