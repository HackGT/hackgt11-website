import React from "react";
import { Box, Center, Image, Heading } from "@chakra-ui/react";

const Schedule = () => {
  return (
    <Center>
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        width="70%">
        {/* <Image
          src="/img/global/green_sticky.png"
          alt="schedule"
          gridArea="1 / 1"
          textAlign="center"
        /> */}
        <Heading
          textAlign="center"
          alignSelf="center"
          fontSize={{ sm: "20px", lg: "35px" }}>
          {/* <a href="https://live.hexlabs.org">Interest Form</a> */}
        </Heading>
      </Box>
    </Center>
  );
};

export default Schedule;
