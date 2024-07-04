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

const TracksChallenges = () => {
  //Currently, this section has 3 columns with the middle column having the sustain track from hackgtX
  return (
    <>
      <Heading fontSize={{ base: "28px", lg: "48px" }} textAlign="center">
      </Heading>
      <Box className={styles.tracksChallenges} display="flex">
        
      </Box>
    </>
  );
};

export default TracksChallenges;
