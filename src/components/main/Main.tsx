import { Link, Image, Box, VStack, HStack, Button, Center } from "@chakra-ui/react";
import styles from "./Main.module.scss";

interface MainProps {
  toJump: string;
}

const TopHalf = () => {
  return (
    <Box display="flex" className={styles.topHalf} zIndex={"2"}>
      {/* <Image
        className={styles.rectangle}
        src="/svg/home/rectangle.svg"
        alt="rectangle"
      /> */}
      
      
    </Box>
  );
};

const BottomHalf = () => {
  return (
    <Center className={styles.botHalf} height="100vh"> {/* Ensure full vertical centering */}
      <Link href="https://registration.hexlabs.org/" isExternal>
        <Button
          className={styles.registerNowButton}
          size="sm"  // Smaller size
          height="20px"  // Square shape
          width="100px"
          bg="blue.500"  // Example background color
          color="white"  // Text color
          _hover={{ bg: "blue.600" }}  // Hover effect
        >
          Register Now
        </Button>
      </Link>
    </Center>
  );
};

const Main = (mp: MainProps) => {
  return (
    <Box className={styles.main}>
      {/* <Image
        className={styles.crumpled_paper}
        src="/svg/home/crumpled_paper.svg"
        alt="crumpled_paper"
      /> */}
      {/* <VStack
        className={styles.title_box}
        justifyContent="center"
        alignItems="center">
        <TopHalf />
        <BottomHalf />
      </VStack> */}
    </Box>
  );
};

export default Main;
