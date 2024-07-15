import { Link, Image, Box, VStack, HStack, Button, Center, Heading } from "@chakra-ui/react";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <Box className={styles.main}>
      <Center>
        <Image
          className={styles.image}
          src="/img/global/HackGT11.png"
          alt="HackGT 11"
        />
      </Center>
    </Box>
  );
};

export default Main;
