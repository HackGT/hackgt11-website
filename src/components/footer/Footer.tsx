import { HStack, VStack, Text, Link, Image } from "@chakra-ui/react";
import NextImage from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
      <VStack spacing="1vw" className={styles.footer_content}>
        <HStack className={styles.stay_connected} spacing="2vw" alignItems="center" >
          <Image
            className={styles.star_pink}
            src="/svg/footer/star_pink.svg"
            alt="star"
          />
          <Text>STAY CONNECTED!</Text>
          <Image
            className={styles.star_pink}
            src="/svg/footer/star_pink.svg"
            alt="star"
          />
        </HStack>
        <Image
          className={styles.beardell_hat}
          src="/svg/footer/beardell_hat.svg"
          alt="beardell in a hat"
        />
        <HStack>
          <Link href="https://hexlabs.org/" target="_blank">
            <Image src="/icon/newsletter.svg" alt="hexlabs" />
          </Link>
          <Link href="https://linktr.ee/thehexlabs" target="_blank">
            <Image src="/icon/linktree.svg" alt="linktree" />
          </Link>
          <Link href="https://www.instagram.com/thehexlabs/" target="_blank">
            <Image src="/icon/insta.svg" alt="instagram" />
          </Link>
          <Link href="https://www.facebook.com/TheHexLabs" target="_blank">
            <Image src="/icon/facebook.svg" alt="facebook" />
          </Link>
          <Link href="https://x.com/TheHexLabs" target="_blank">
            <Image src="/icon/x.svg" alt="x" />
          </Link>
          <Link href="https://discord.hexlabs.org/" target="_blank">
            <Image src="/icon/discord.svg" alt="discord" />
          </Link>
        </HStack>
        <Text>made with &#60;3 by hexlabs</Text>
        <Link
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank">
          MLH Code of Conduct
        </Link>
      </VStack>
  );
};

export default Footer;
