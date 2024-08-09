import { Link, Image, Box, Text, HStack, Button, Center, Heading } from "@chakra-ui/react";
import styles from "./Main.module.scss";
import { useEffect } from "react";

const Main = () => {
  const handleClick = () => {

    document.getElementById("titleBox")?.classList.add(styles.fade_out);


    document.getElementById("vertical_curtains")?.classList.add(styles.fade_out);
    setTimeout(() => {
      // start zoom into tent (curtains)
      document.getElementById('curtains')?.classList.add(styles.zoom_start);
      document.getElementById("top")?.classList.add(styles.bring_to_front, styles.zoom_start);
    }, 700);

    setTimeout(() => {
      // this should fade in new tent
      // setShowingMain(true);

      // document.getElementById("first_box")?.classList.add(styles.fade_out);
      // document.getElementById("mainHeader")?.classList.remove(styles.hidden);
      // document.getElementById("mainHeader")?.classList.add(styles.fade_in);
    }, 2700);


    setTimeout(() => {
      // show rest of the page

    }, 3500)

    // setTimeout(() => {
    //   document.getElementById("navbar")?.classList.remove(navbarStyles.hidden);
    // }, 4000);
  }

  return (
    <Box className={``} id='mainHeader'>



      <Box className={`${styles.main}`}>
        <Box d='flex' height='100vh' id='first_box'>
          <Image src="/img/top.png" className={styles.top} id="top" />

          <Image src="/img/curtains.png" className={styles.vertical_curtains} id="vertical_curtains" />
          <Image src="/img/bg_curtains.png" className={styles.curtain} id='curtains' height='100vh' />


          <Box color='white' className={`${styles.titleBox}`} id="titleBox">
            <Box textAlign='center'>
              <Image
                src="/svg/home/light_title.svg"
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

        <Box id='second_box' className={`${styles.hidden}`}>
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
            className={`${styles.main_tent} `} // ${styles.showingBig}
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
      </Box>
    </Box>
  );
};
export default Main;