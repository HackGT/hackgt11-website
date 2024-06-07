import { Box, Image } from "@chakra-ui/react";

import styles from "./Sponsors.module.scss";

interface LogoProps {
  key: null;
  url: string;
  website: string;
  name: string;
  tier: number;
  numTiers: number;
}

const Logo = (lp: LogoProps) => {
  return (
    <a href={lp.website} target="_blank" rel="noreferrer">
      <Image
        draggable="false"
        className={styles.border}
        boxSize={(lp.numTiers - lp.tier) * 175}
        objectFit="contain"
        alt={lp.name}
        src={lp.url}
      />
    </a>
  );
};

export default Logo;
