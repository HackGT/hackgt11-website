import {
  Text,
  Image,
  Center,
  Box,
  Heading,
  VStack,
  HStack,
  Alert,
  AlertIcon,
  Link,
  AlertDescription,
  Flex,
} from "@chakra-ui/react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <Box
      className={styles.about}
      border="solid purple">
      {/* <Image
        className={styles.main_tent}
        src="/svg/home/main_tent.svg"
        alt="main tent"
      /> */}
      <Image
        className={styles.beardell_bench}
        src="/svg/about/beardell_bench.svg"
        alt="beardell on bench"
      />
      <Image
        className={styles.smiley_board}
        src="/svg/about/smiley_board.svg"
        alt="smiley board"
      />
      <Image
        className={styles.balloons}
        src="/svg/about/balloons.svg"
        alt="grass"
      />
      <Image
        className={styles.grass1}
        src="/svg/about/grass1.svg"
        alt="grass"
      />
      <Image
        className={styles.grass2}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
      <Image
        className={styles.grass3}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
      <Image
        className={styles.grass4}
        src="/svg/about/grass1.svg"
        alt="grass"
      />
      <Image
        className={styles.top_path}
        src="/svg/about/top_path.svg"
        alt="path"
      />
      <Box display="grid" className={styles.about_background}>
        <Image
          // className={styles.about_background}
          src="/svg/about/about_background.svg"
          alt="about"
          gridArea="1 / 1"
          width="100%"
        />
        <Image
          // className={styles.about_outline}
          src="/svg/about/about_outline.svg"
          alt="about"
          gridArea="1 / 1"
          width="95%"
        />
        <VStack 
          gridArea="1 / 1"
          className={styles.aboutStack}
          spacing={{ base: "1vw", lg: "2vw" }}>
          <HStack spacing="2vw" alignItems="center">
            <Image
              className={styles.star}
              src="/svg/about/star.svg"
              alt="star"
            />
            <Heading className={styles.title}>ABOUT</Heading>
            <Image
              className={styles.star}
              src="/svg/about/star.svg"
              alt="star"
            />
          </HStack>
          <Text className={styles.description}>
          Shape the future at the 🎪 Circus of Inventions from <b>September 27th</b> to <b>September 29th!</b> 🎡 
          The 11th edition of our flagship hackathon brings you a transformed carnival of creativity for all innovators, builders, and visionaries. 
          <br /><br />
          Each year, HackGT welcomes over 1500+ hackers 🤹 from around the world to tackle novel challenges, win exciting prizes, and make lasting connections 🎠! 
          HackGT's stage will be open to everyone, regardless of background, experience, or skill level, to showcase their innovative ideas. 🎢 
          Hackers can expect a thrilling weekend filled with networking opportunities, top-tier prizes, engaging mini-events, and lots of swag! 🏆
          </Text>
        </VStack>
      </Box>
      {/* <Image
        className={styles.beardell_hat}
        src="/svg/about/beardell_hat.svg"
        alt="beardell in a hat"
      /> */}
      <Image
        className={styles.beardell_balloon}
        src="/svg/about/beardell_balloon.svg"
        alt="beardell with a balloon"
      />
      <Image
        className={styles.grass5}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
    </Box>
  );
};

export default About;
