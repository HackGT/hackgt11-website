import { Center, Image, Box, Heading } from "@chakra-ui/react";
import { useState } from "react";

import styles from "./Sponsors.module.scss";

const Sponsors = () => {
  const [tiers] = useState([1, 2, 3, 4]);

  return (
    <Box
      display="grid"
      justifyContent="center"
      alignContent="center"
      className={styles.sponsors}>
      <Image
        className={styles.bottom_path}
        src="/svg/sponsors/bottom_path.svg"
        alt="path"
      />
      <Image
        className={styles.juggledell}
        src="/svg/sponsors/juggledell.svg"
        alt="beardell juggling"
      />
      <Image
        className={styles.grass_sp1}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
      <Image
        className={styles.grass_sp2}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
      <Image
        className={styles.grass_sp3}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
      <Image
        className={styles.grass_sp4}
        src="/svg/about/grass2.svg"
        alt="grass"
      />
      <Image
        className={styles.sponsors_banner}
        src="/svg/sponsors/sponsors_banner.svg"
        alt="sponsors banner"
      />
      <Image
        className={styles.sponsors_lake}
        src="/svg/sponsors/sponsors_lake.svg"
        alt="sponsors lake"
      />
      <Image
        className={styles.sponsors_no_nsa}
        src="/svg/sponsors/sponsors_no_nsa.svg"
        alt="sponsors no nsa"
      />
      <Image
        className={styles.seal}
        src="/svg/sponsors/seal.svg"
        alt="seal"
      />
      <Image className={styles.logos} src="/svg/sponsors/mlh.svg" alt="sponsors" />
    </Box>
  );
};

export default Sponsors;
