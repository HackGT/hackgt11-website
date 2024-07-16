import Image from "next/image";
import styles from "./TracksChallenges.module.scss";
import { Alert, AlertIcon, Box, VStack, Text, Heading, HStack, Flex, Spacer } from "@chakra-ui/react";
import { tracks } from "./tracks.json";

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
      <Heading fontSize={{ base: "28px", lg: "48px" }} px="5vw" my="-5vw">
        Tracks and Challenges
      </Heading>
      <Flex className={styles.tracksChallenges}>
        <Text width="50%" textAlign="center" alignContent="center">Coming Soon!</Text>
        {/* <Image
          height="270px"
          width="180px"
          src={"/img/tracks/sign-post-1.png"}
          alt="sign post"
        /> */}
      </Flex>
      {/* <Spacer height="40vw"/> */}
      {/* <VStack ml="5vw" alignItems="start">
        <Image
          height="200vw"
          width="400vw"
          src={"/img/snack-bear-grp.png"}
          alt="snack bear"
        />
        <Box alignSelf="end">
          <Image
            height="500vw"
            width="240vw"
            src={"/img/merry-go-round.png"}
            alt="merry go round"
          />
        </Box>
        <Image
            height="270px"
            width="180px"
            src={"/img/sign-post-2.png"}
            alt="sign post"
          />
      </VStack> */}
    </>
  );
};

export default TracksChallenges;
