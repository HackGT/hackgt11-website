import React from "react";
import { Box, Center, Image, Heading, Spacer } from "@chakra-ui/react";

const Schedule = () => {
  return (
    <Center>
      <Box
        display="grid"
        justifyContent="center"
        alignContent="center"
        width="50%">
        <Spacer gridArea="1 / 1" height="20vw" />
        <Image
          src="/img/schedule/tickets.png"
          alt="schedule"
          gridArea="2 / 1"
          textAlign="center"
        />
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
