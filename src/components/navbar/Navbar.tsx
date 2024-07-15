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

import { useEffect } from "react";

interface Anchor {
  name: string;
  id: string;
  color: string;
  img: string;
}

interface NavProps {
  anchors: Anchor[];
}

const Navbar = (np: NavProps) => {
  return (
    <div>
      <a
        href="https://mlh.io/seasons/2025/events"
        target="_blank"
        rel="noreferrer"
        id={styles.mlh}>
        <img
          src="/img/global/mlh-trust-badge-2025-blue.png"
          alt="Major League Hacking 2025 Hackathon Season"
          style={{ width: '100px', height: 'auto' }}
        />
      </a>
      <Center>
        <HStack draggable="false" className={styles.container} spacing={"4vw"}>
          {np.anchors.map((anchor) => (
            <NavbarDesktop
              key={null}
              name={anchor.name}
              anchorLink={anchor.id}
              bgColor={anchor.color}
              img={anchor.img}
            />
          ))}
        </HStack>
      </Center>

      <NavbarMobile />
    </div>
  );
};

export default Navbar;
