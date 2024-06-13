import React, { useRef, useEffect, useState } from "react";
import { Box, Center, chakra, HStack, Icon, VStack } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import dateFormat from "dateformat";

import styles from "./Schedule.module.scss";

const formatDateString = (date: string) => dateFormat(date, "h:MM TT");

export const EventRow = (props: any) => {
  return (
    <Box key={props.row.id} className={styles.event_row}>
      <HStack>
        <Box className={styles.event_time}>
          {/* <TimeIcon fontSize="16px" marginRight="15px" /> */}
          {/* {`${formatDateString(props.row.startDate)} - ${formatDateString(props.row.endDate)}`} */}
          {`${formatDateString(props.row.startDate)}`}
        </Box>
        <Box>{props.row.name}</Box>
      </HStack>
    </Box>
  );
};
