import { Link, Image, Box, HStack, Button, Center, Heading } from "@chakra-ui/react";
import styles from "./CarnivalMain.module.scss";

const CarnivalMain = ({ handleClick }) => {
  return (
    <Box bg='#34130D' className={styles.main} d='flex'>
      <Image src="/img/top.png" className={styles.top} id="top" />

      <Image src="/img/curtains.png" className={styles.curtain} />
      <Image src="/img/bg_curtains.png" className={styles.curtain} id='curtains' />


      <Box color='white' className={styles.titleBox} id="titleBox">
        <Box textAlign='center'>
          <Image
            src="/svg/home/light_title.svg"
            alt="HackGT 11"
            w='1500px'
          />

          <Button onClick={handleClick} className={styles.button} bg='#FFD700' color='#34130D' size='lg' mt={4}>
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default CarnivalMain;