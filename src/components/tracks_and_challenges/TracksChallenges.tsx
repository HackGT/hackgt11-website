import styles from "./TracksChallenges.module.scss";
import { Alert, AlertIcon, Box, VStack, Text, Heading, HStack, Flex, Spacer, Image } from "@chakra-ui/react";
import { tracks } from "./tracks.json";
import { useState } from "react";

interface trackCardProps {
  trackName: string;
  trackDescription: string;
  color: string;
}

const TrackCard = (props: trackCardProps) => {
  return (
    <Box px={4} py={20}>
      <VStack className={styles.trackCard}>
        <Box
          width={"100%"}
          textAlign="center"
          background={props.color}
          border="1px black solid"
          boxShadow="4px 4px 4px rgba(0, 0, 0, 0.5)">
          <Text
            fontFamily={"Be Vietnam Pro"}
            fontSize={{ base: "16px", lg: "20px" }}>
            {props.trackName}
          </Text>
        </Box>
        <Text textAlign="center" fontSize={{ base: "16px", lg: "14px" }}>
          {props.trackDescription}
        </Text>
      </VStack>
    </Box>
  );
};

enum Tracks {
  NONE,
  EMERGING,
  GENERAL
}

const TracksChallenges = () => {
  const [trackClicked, setTrackClicked] = useState(Tracks.NONE);

  return (
    <Box border="solid blue" className={styles.tracksChallenges}>
      <Image
        className={styles.emerging_tent}
        src="/svg/tracks/emerging_tent.svg"
        alt="emerging"
        onClick={() => {trackClicked != Tracks.EMERGING ? setTrackClicked(Tracks.EMERGING) : setTrackClicked(Tracks.NONE)}}
      />
      <Image
        className={styles.general_tent}
        src="/svg/tracks/general_tent.svg"
        alt="general"
        onClick={() => {trackClicked != Tracks.GENERAL ? setTrackClicked(Tracks.GENERAL) : setTrackClicked(Tracks.NONE)}}
      />
      <VStack
        className={styles.tracksStack}
        spacing="1vw"
      >
        <HStack spacing="2vw" alignItems="center">
          <Image
            className={styles.star_blue}
            src="/svg/tracks/star_blue.svg"
            alt="star"
          />
          <Heading className={styles.title}>TRACKS</Heading>
          <Image
            className={styles.star_blue}
            src="/svg/tracks/star_blue.svg"
            alt="star"
          />
        </HStack>
        <Text fontSize="0.3em">Click on each track to learn more!</Text>
        {trackClicked == Tracks.NONE &&
        <Text className={styles.description}>
          Shape the future at the 🎪 Circus of Inventions from <b>September 27th</b> to <b>September 29th!</b> 🎡 
          The 11th edition of our flagship hackathon brings you a transformed carnival of creativity for all innovators, builders, and visionaries. 
          <br /><br />
          Each year, HackGT welcomes over 1500+ hackers 🤹 from around the world to tackle novel challenges, win exciting prizes, and make lasting connections 🎠! 
          HackGT's stage will be open to everyone, regardless of background, experience, or skill level, to showcase their innovative ideas. 🎢 
          Hackers can expect a thrilling weekend filled with networking opportunities, top-tier prizes, engaging mini-events, and lots of swag! 🏆        </Text>}
        {trackClicked == Tracks.EMERGING &&
        <Text className={styles.description}>
          emerging track desc
        </Text>}
        {trackClicked == Tracks.GENERAL &&
        <Text className={styles.description}>
          general track desc
        </Text>}
      </VStack>
      <Image
        className={styles.middle_path}
        src="/svg/tracks/middle_path.svg"
        alt="path"
      />
      <Image
        className={styles.beardell_hoop}
        src="/svg/tracks/beardell_hoop.svg"
        alt="beardell hulahooping"
      />
      {/* <Flex className={styles.tracksChallenges}>
        <Text width="50%" textAlign="center" alignContent="center">Coming Soon!</Text>
      </Flex> */}
    </Box>
  );
};

export default TracksChallenges;
