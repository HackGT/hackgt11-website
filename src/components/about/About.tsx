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
      // className={styles.about}
      display="flex"
      justifyContent="flex-end"
      width="100%">
      <VStack width="100%" display="flex">
        <VStack width="50%" spacing={8} display="flex" alignSelf="flex-end" py="5vw">
          <Flex width="100%" justifyContent="center" alignItems="flex-end" alignContent="flex-end">
            <Image
              className={styles.candyBear}
              src={"/img/about/candy-bear.png"}
              alt="candy bear"
            />
            <Image
              className={styles.candyShop}
              src={"/img/about/candy-shop.png"}
              alt="candy shop"
            />
          </Flex>
          <br />
          <Heading textAlign="center" fontSize={{ base: "28px", lg: "48px" }} pr="2vw">About</Heading>
          <Text textAlign="center" width="100%" pr="2vw" lineHeight="2">
            Shape the future at the 🎪 Circus of Inventions from September __ to September __! 🎡
            The 11th edition of our flagship hackathon brings you a transformed carnival of creativity 
            for all innovators, builders, and visionaries. Each year, HackGT welcomes over 1500+ hackers 🤹 
            from around the world to tackle novel challenges, win exciting prizes, and make lasting connections 🎠! 
            HackGT's stage will be open to everyone, regardless of background, experience, or skill level, to 
            showcase their innovative ideas. 🎢 Hackers can expect a thrilling weekend filled with networking 
            opportunities, top-tier prizes, engaging mini-events, and lots of swag!  🏆
          </Text>
          {/* <RegisterNow /> */}
          {/* <Alert className={styles.alert} width="60%">
            <AlertIcon />
            <AlertDescription
              fontSize={{ base: "12px", lg: "14px" }}
              fontFamily="Be Vietnam Pro">
              Participants will only be able to submit their project to ONE of the
              five tracks. In addition, each track will have the option to be
              submitted as either emerging or advanced. You don&apos;t need to
              have any experience to join in! <br />
              <br />
              New, beginning hackers can submit to emerging levels for a more
              approachable, beginner-friendly experience enriched with workshops
              and project support, while more seasoned hackers can throw their hat
              in the ring for a higher stakes pool of competition! We&apos;re here
              to meet you on your hacking journey at any level!
              Note: The form above is not for registration but for interest only.
              <br />
              <br />
              This September at Georgia Tech, get ready for a whirlwind of fun, thrills, and excitement! Stay tuned for details!
              
            </AlertDescription>
          </Alert> */}
          <br />
        </VStack>
        <Image
          className={styles.balloonBear}
          src={"/img/about/balloon-bear.png"}
          alt="balloon bear"
        />
      </VStack>
    </Box>
  );
};

export default About;
