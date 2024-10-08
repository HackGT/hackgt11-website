import { Link, Image, Box, VStack, HStack, Button, Center, Heading } from "@chakra-ui/react";
import styles from "./Main.module.scss";
import { useEffect } from "react";

const Main = ({ animate }: { animate: boolean }) => {
  useEffect(() => {
    // var mydiv = document.getElementById('mydivid');
    // mydiv.top = ((parseInt(document.body.clientHeight) / 2) - (parseInt(myDiv.Height) / 2)) +'px';
    // mydiv.left = ((parseInt(document.body.clientWidth) / 2) - (parseInt(myDiv.Width) / 2)) +'px';
  })
  return (
    <Box className={`${styles.main} ${styles.hidden}`} id='mainHeader'>
      <Image
        className={styles.sky}
        src="/svg/home/sky.svg"
        alt="sky"
      />
      <Image
        className={styles.air_balloon}
        src="/svg/home/air_balloon.svg"
        alt="beardell on balloon"
      />
      <Box className={styles['clouds-container']}>
        <Image
          className={styles.clouds}
          src="/svg/home/clouds.svg"
          alt="clouds"
        />
        <Image
          className={`${styles.clouds} ${styles.reversed}`}
          src="/svg/home/clouds.svg"
          alt="reversed clouds"
        />
        <Image
          className={styles.clouds}
          src="/svg/home/clouds.svg"
          alt="clouds"
        />
        <Image
          className={`${styles.clouds} ${styles.reversed}`}
          src="/svg/home/clouds.svg"
          alt="reversed clouds"
        />
        <Image
          className={styles.clouds}
          src="/svg/home/clouds.svg"
          alt="clouds"
        />
        <Image
          className={`${styles.clouds} ${styles.reversed}`}
          src="/svg/home/clouds.svg"
          alt="reversed clouds"
        />
      </Box>
      <Image
        className={styles.title}
        src="/svg/home/title.svg"
        alt="HackGT 11"
      />
      <Image
        className={styles.firework}
        src="/svg/home/firework.svg"
        alt="fireworks"
      />
      <Image
        className={styles.ferris_wheel}
        src="/svg/home/ferris_wheel.svg"
        alt="beardell on ferris"
      />
      <Image
        className={styles.ticket_booth}
        src="/svg/home/ticket_booth.svg"
        alt="ticket booth"
      />
      <Image
        className={`${styles.main_tent} ${animate ? styles.main_tent_animation : ''}`}
        src="/svg/home/main_tent.svg"
        alt="main tent"
        id="main_tent"
      />
      <Image
        className={styles.popcorn_stand}
        src="/svg/home/popcorn_stand.svg"
        alt="popcorn stand"
      />
      <Image
        className={styles.candy_stand}
        src="/svg/home/candy_stand.svg"
        alt="candy stand"
      />
      <Image
        className={styles.grass_h1}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
      <Image
        className={styles.grass_h2}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
    </Box>
  );
};
export default Main;