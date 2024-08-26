/* eslint-disable @next/next/no-img-element */

import NavbarDesktop from "./NavbarDesktop";

import styles from "./Navbar.module.scss";

import {
  HStack,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Center,
  Link,
} from "@chakra-ui/react";

import NavbarMobile from "./NavbarMobile";

interface Anchor {
  name: string;
  id: string;
  img: string;
}

interface NavProps {
  anchors: Anchor[];
}

const Navbar = (np: NavProps) => {
  return (
    <div className={`${styles.transition2s} ${styles.hidden}`} id="navbar">
      <a
        href="https://mlh.io/seasons/2025/events"
        target="_blank"
        rel="noreferrer"
        id={styles.mlh}>
        <img
          src="/img/global/mlh-trust-badge-2025-blue.png"
          alt="Major League Hacking 2025 Hackathon Season"
          style={{ width: '75px', height: 'auto' }}
        />
      </a>
      <Center>
        <HStack draggable="false" className={styles.container} spacing={"1vw"}>
          {np.anchors.map((anchor, index) => (
            <NavbarDesktop
              key={index.toString()}
              name={anchor.name}
              anchorLink={anchor.id}
              img={anchor.img}
            />
          ))}
        </HStack>
      </Center>

      <Box
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <NavbarMobile />
      </Box>
    </div>
  );
};

export default Navbar;
