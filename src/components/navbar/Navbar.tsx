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
}

interface NavProps {
  anchors: Anchor[];
}

const Navbar = (np: NavProps) => {
  return (
    <div>
      <a
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
        target="_blank"
        rel="noreferrer"
        id={styles.mlh}>
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
          alt="Major League Hacking 2024 Hackathon Season"
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
            />
          ))}
        </HStack>
      </Center>

      <NavbarMobile />
    </div>
  );
};

export default Navbar;
