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
} from "@chakra-ui/react";
import styles from "./About.module.scss";

const StickyNote = () => {
  return (
    <Box className={styles.aboutNotepad} width="90%">
      <Center>
        <Text
          className={styles.aboutNotepadText}
          fontSize={{ sm: "12px", lg: "14px" }}
          px="3%"
          py="2%"
          top="0"
          zIndex={1}>

          {/* THIS SECTION IS THE GENERAL DESCRIPTION OF THE HACKGT11 EVENT
          (all information below is out of date)
          <br /> <br />
          Innovate, reimagine, and shape the future this year at HackGT X:
          Journal of Memories from October 13th - 15th! The tenth iteration of
          our flagship hackathon is bringing a hack to remember to all
          brainstormers, creators, and makers.
          <br /> <br />
          Each year, HackGT welcomes over 1500+ hackers from around the world to
          solve novel challenges, win exciting prizes, and meet loads of new
          friends! This event is open to everyone and is an opportunity for
          students of all backgrounds, skill levels, and experiences to innovate
          and showcase their ideas. HackGT brings you an action-packed,
          memorable weekend filled with networking opportunities,
          community-building activities, and aesthetic swag! */}
          {/*
          <br /> <br />
           <Text fontWeight={800}>Travel Reimbursements</Text>
          We send buses to schools and provide travel reimbursements! Check out
          our{" "}
          <Link
            fontWeight="bold"
            href="https://hexlabs.notion.site/HackGT-X-Travel-Assistance-fcabb1567680459c893ecb245fe6e8a7?pvs=4">
            travel reimbursement page
          </Link>{" "}
          for more information and make sure to apply before August 27th! */}
        </Text>
      </Center>
    </Box>
  );
};

const RegisterNow = () => {
  return (
    <Box
      className={styles.registerNow}
      display="flex"
      justifyContent="center"
      alignContent="center"
      width="70%">
      {/* <Image
        className={styles.registrationGrid}
        src={"/img/about/registration_grid.png"}
        gridArea="1 / 1"
        textAlign="center"
        alt="Grid box"
      /> */}
      <Heading
        className={styles.registerNowText}
        fontSize={{ sm: "12px", lg: "24px" }}
        // gridArea="1 / 1"
        textAlign="center"
        alignSelf="center">
        <a href="https://forms.gle/iSJYV8Td3Fouw3ps6">Interest Form</a>
      </Heading>
    </Box>
  );
};

const About = () => {
  return (
    <Box
      className={styles.about}
      display="flex"
      justifyContent={"center"}
      alignItems="center">
      <VStack className={styles.aboutStack} spacing={8}>
        <HStack py="8%">
          <Heading fontSize={{ base: "28px", lg: "48px" }}>Coming Soon!</Heading>
          {/* <Image    This image was a part of hackgtX if you want to delete this sentence and uncomment this section of code.
            className={styles.aboutEllipse}
            src={"/img/about/about-ellipse.png"}
            width={"30%"}
            position="absolute"
            left={"-8%"}
            alt="Ellipse"
          /> */}
        </HStack>
        {/* <StickyNote /> */}
        <RegisterNow />
        <Alert className={styles.alert} width="60%">
          {/* <AlertIcon /> */}
          <AlertDescription
            fontSize={{ base: "12px", lg: "14px" }}
            fontFamily="Be Vietnam Pro">
            {/* Participants will only be able to submit their project to ONE of the
            five tracks. In addition, each track will have the option to be
            submitted as either emerging or advanced. You don&apos;t need to
            have any experience to join in! <br />
            <br />
            New, beginning hackers can submit to emerging levels for a more
            approachable, beginner-friendly experience enriched with workshops
            and project support, while more seasoned hackers can throw their hat
            in the ring for a higher stakes pool of competition! We&apos;re here
            to meet you on your hacking journey at any level! */}
            Note: The form above is not for registration but for interest only.
            <br />
            <br />
            This September at Georgia Tech, get ready for a whirlwind of fun, thrills, and excitement! Stay tuned for details!
            
          </AlertDescription>
        </Alert>
        <br />
      </VStack>
    </Box>
  );
};

export default About;
