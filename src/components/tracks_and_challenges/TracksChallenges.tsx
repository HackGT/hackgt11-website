import Image from "next/image";
import styles from "./TracksChallenges.module.scss";
import { Alert, AlertIcon, Box, VStack, Text, Heading } from "@chakra-ui/react";
import { tracks } from "./tracks.json";
import airplane from "../../../public/img/tracks/airplane.svg";

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
            fontFamily={"Scrapbook"}
            fontSize={{ base: "16px", lg: "20px" }}>
            {props.trackName}
          </Text>
        </Box>
        <Text textAlign="center" fontSize={{ base: "16px", lg: "20px" }}>
          {props.trackDescription}
        </Text>
      </VStack>
    </Box>
  );
};

const TracksChallenges = () => {
  return (
    <>
      <Heading fontSize={{ base: "28px", lg: "48px" }} textAlign="center">
        Tracks and Challenges
      </Heading>
      <Box className={styles.tracksChallenges} display="flex">
        <Box flexDirection="column">
          <TrackCard
            trackName={tracks[0].trackName}
            trackDescription={tracks[0].trackDescription}
            color={tracks[0].color}
          />
          <TrackCard
            trackName={tracks[1].trackName}
            trackDescription={tracks[1].trackDescription}
            color={tracks[1].color}
          />
        </Box>
        <Box flexDirection="column">
          <Image src={airplane} alt="airplane" />
          <TrackCard
            trackName={tracks[2].trackName}
            trackDescription={tracks[2].trackDescription}
            color={tracks[2].color}
          />
        </Box>
        <Box flexDirection="column">
          <TrackCard
            trackName={tracks[3].trackName}
            trackDescription={tracks[3].trackDescription}
            color={tracks[3].color}
          />
          <TrackCard
            trackName={tracks[4].trackName}
            trackDescription={tracks[4].trackDescription}
            color={tracks[4].color}
          />
        </Box>
      </Box>
    </>
  );
};

export default TracksChallenges;
