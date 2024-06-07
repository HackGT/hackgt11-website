import { Link, Image, Box, VStack, HStack } from "@chakra-ui/react";
import styles from "./Main.module.scss";

interface MainProps {
  toJump: string;
}

const TopHalf = () => {
  return (
    <Box display="grid" className={styles.topHalf} zIndex={"2"}>
      <Image
        className={styles.rectangle}
        src="/svg/home/rectangle.svg"
        alt="rectangle"
        gridArea="1 / 1"
      />
      <Image
        className={styles.logo_and_stars}
        src="/svg/home/logo_and_stars.svg"
        alt="logo_and_stars"
        gridArea="1 / 1"
        width="20%"
      />
      <VStack gridArea="1 / 1" spacing="0.1rem" className={styles.title_box}>
        <Image
          className={styles.hackgt_text}
          src="/svg/home/hackgt_text.svg"
          alt="hackgt_text"
          width="50%"
        />
        <Image
          className={styles.brown_blurb}
          src="/img/home/brown_blurb.png"
          alt="brown_blurb"
          width="30%"
        />
        <Image
          className={styles.dates_blurb}
          src="/svg/home/dates_blurb.svg"
          alt="dates_blurb"
          width="30%"
        />
      </VStack>
    </Box>
  );
};

const BottomHalf = () => {
  return (
    <HStack justifyContent={"center"} className={styles.botHalf}>
      <Image
        className={styles.location_blurb}
        src="/svg/home/location_blurb.svg"
        alt="location_blurb"
        width="25%"
      />
      <Link href="https://registration.hexlabs.org/" isExternal>
        <Image
          className={styles.register_now}
          src="/svg/home/register_now.svg"
          alt="register_now"
        />
      </Link>
      <Image
        className={styles.random_text_blurb}
        src="/svg/home/random_text_blurb.svg"
        alt="random_text_blurb"
        width="25%"
      />
    </HStack>
  );
};

const Main = (mp: MainProps) => {
  return (
    <Box display="grid" className={styles.main}>
      <Image
        className={styles.crumpled_paper}
        src="/svg/home/crumpled_paper.svg"
        alt="crumpled_paper"
        gridArea="1 / 1"
      />
      <VStack
        className={styles.title_box}
        gridArea="1 / 1"
        justifyContent="center"
        alignItems="center">
        <TopHalf />
        <BottomHalf />
      </VStack>
    </Box>
  );
};

export default Main;
