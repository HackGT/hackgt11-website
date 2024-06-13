import { Center, Image, Box, Heading } from "@chakra-ui/react";
import { useState } from "react";

import styles from "./Sponsors.module.scss";

const Sponsors = () => {
  const [tiers] = useState([1, 2, 3, 4]);

  return (
    <Center>
      <Box
        display="grid"
        justifyContent="center"
        alignContent="center"
        width="60%">
        <Heading
          gridArea="1 / 1"
          textAlign="center"
          alignSelf="center"
          borderRadius="10px"
          fontSize={{ sm: "20px", lg: "35px" }}>
          Thank you so much to our sponsors!
        </Heading>
        <br/><br/>
        <Image src="/img/sponsors.png" alt="sponsors" />
        <br/><br/>
      </Box>
    </Center>
  );
};

export default Sponsors;
