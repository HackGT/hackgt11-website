import { Link, Center, Text } from "@chakra-ui/react";

import styles from "./Navbar.module.scss";

interface NavbarDesktopProps {
  name: string;
  key: null;
  anchorLink: string;
  bgColor: string;
}

const NavbarDesktop = (ncp: NavbarDesktopProps) => {
  return (
    <div>
      <Link
        draggable="false"
        style={{ textDecoration: "none" }}
        href={ncp.anchorLink}
        className={styles.component}
      >
          <Center bg={ncp.bgColor} >
            <div className={styles.Text}>{ncp.name}</div>
          </Center>
      </Link>
    </div>
  );
};

export default NavbarDesktop;
