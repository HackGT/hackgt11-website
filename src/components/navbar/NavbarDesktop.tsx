import { Link, Center, Text } from "@chakra-ui/react";
import styles from "./Navbar.module.scss";

interface NavbarDesktopProps {
  name: string;
  key: string;
  anchorLink: string;
  img: string;
}

const NavbarDesktop = (ncp: NavbarDesktopProps) => {
  return (
    <div>
      <Link
        draggable="false"
        style={{ textDecoration: "none" }}
        href={ncp.anchorLink}
        // className={styles.component}
      >
        <Center className={styles.imageBackground}>
          <Text>{ncp.name}</Text>
        </Center>
      </Link>
    </div>
  );
};

export default NavbarDesktop;
