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
    <Box className={styles.tracksChallenges}>
      <Image
        className={styles.grass_t1}
        src="/svg/about/grass1.svg"
        alt="grass"
      />
      <Image
        className={styles.grass_t2}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
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
        {trackClicked == Tracks.EMERGING &&
        <Text className={styles.description}>
          Feeling like a newbie to hackathons and uncertain on how to get a technology project up and running?
          The Emerging Hacker Track is here to provide you with walkthroughs on introductory tech and tips on how to become 
          a pro at a hackathon. We offer a wide variety of workshops to explore and learn about various topics in computing.
          We will also have on-demand mentor office hours so you get the help you need to complete your very first hackathon 
          project.
        </Text>}
        {trackClicked == Tracks.GENERAL &&
        <Text className={styles.description}>
          Already have experience and found your groove at building technology projects? The General Track gives the 
          conventional hacker experience with full creative control and exciting supplementary resources as needed. 
          This track is your opportunity to innovate and connect with others as you bring your ideas to life. 
          We'll bring engaging industry professionals, provide new technologies, and award impactful prizes to 
          help you with your project.
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
