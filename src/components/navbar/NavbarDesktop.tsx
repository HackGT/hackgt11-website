import { Link, Center } from "@chakra-ui/react";
import styles from "./Navbar.module.scss";

interface NavbarDesktopProps {
  name: string;
  key: null;
  anchorLink: string;
  bgColor: string;
  img: string;
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
        <Center className={styles.imageBackground}>
          <img src={ncp.img} alt={ncp.name} className={styles.textImage} />
        </Center>
      </Link>
    </div>
  );
};

export default NavbarDesktop;
