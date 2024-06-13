import { HStack, VStack, Text, Link, Image } from "@chakra-ui/react";
import NextImage from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
      <VStack className={styles.footer_content}>
        <HStack>
          <Link href="https://www.instagram.com/thehexlabs/" target="_blank">
            <Image src="/icon/insta.svg" alt="instagram" />
          </Link>
          <Link href="https://www.facebook.com/TheHexLabs" target="_blank">
            <Image src="/icon/fb.svg" alt="facebook" />
          </Link>
          <Link href="https://twitter.com/TheHexLabs" target="_blank">
            <Image src="/icon/twitter.svg" alt="twitter" />
          </Link>
          <Link href="https://github.com/HackGT" target="_blank">
            <Image src="/icon/github.svg" alt="github" />
          </Link>
          <Link href="https://hexlabs.org/" target="_blank">
            <Image src="/icon/web.svg" alt="hexlabs" />
          </Link>
        </HStack>
        <Text>With 💜 from the HexLabs team</Text>
        <Link
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank">
          MLH Code of Conduct
        </Link>
      </VStack>
  );
};

export default Footer;
