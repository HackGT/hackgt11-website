import { Link, Image, Box, HStack, Text, Center, Heading } from "@chakra-ui/react";
import styles from "./CarnivalMain.module.scss";

const CarnivalMain = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <Box bg='#34130D' className={`${styles.main}`} d='flex' id="carnivalMain" height='100vh'>
      <Image src="/img/top.png" className={styles.top} id="top" />

      <Image src="/img/curtains.png" className={styles.curtain} />
      <Image src="/img/bg_curtains.png" className={styles.curtain} id='curtains' height='100vh' />


      <Box color='white' className={`${styles.titleBox}`} id="titleBox">
        <Box textAlign='center'>
          <Image
            src="/img/hackg11main.png"
            alt="HackGT 11"
            w='1200px'
          />

          <Link
            draggable="false"
            style={{ textDecoration: "none" }}
            onClick={handleClick}
          >
            <Center className={styles.imageBackground} mx='auto' mt={8}
            >
              <Text>Enter the carnival</Text>
            </Center>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default CarnivalMain;