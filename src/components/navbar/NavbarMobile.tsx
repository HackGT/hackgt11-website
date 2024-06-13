import { Menu, MenuButton, MenuList, Link, MenuItem } from "@chakra-ui/react";
import React from "react";

import styles from "./Navbar.module.scss";

// create a react functional component
const NavbarMobile: React.FC = () => {
  return (
    <div className={styles.menu}>
      <Menu>
        <MenuButton>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M31.5 18.1915H4.5"
              stroke="black"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M31.5 9H4.5"
              stroke="black"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M31.5 27.3829H4.5"
              stroke="black"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </MenuButton>

        <MenuList>
          <Link href="#home">
            <MenuItem>Home</MenuItem>
          </Link>

          <Link href="#about">
            <MenuItem>About</MenuItem>
          </Link>

          <Link href="#tracks_and_challenges">
            <MenuItem>Tracks</MenuItem>
          </Link>

          <Link href="#faq">
            <MenuItem>FAQ</MenuItem>
          </Link>

          <Link href="#schedule">
            <MenuItem>Schedule</MenuItem>
          </Link>

          <Link href="#sponsors">
            <MenuItem>Sponsors</MenuItem>
          </Link>

          <Link href="https://registration.hexlabs.org/" isExternal>
            <MenuItem>Apply</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavbarMobile;
