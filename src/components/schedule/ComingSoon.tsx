import { Center, Text, Progress } from "@chakra-ui/react";

import styles from "./Schedule.module.scss";

const ComingSoon = () => {
  let currentHackGTDate = new Date("2022-10-22");
  let dayThisWasCreated = new Date("2022-07-18");
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  currentDate = new Date(year, month, day);

  var Total_Difference_In_Time = currentHackGTDate.getTime() - dayThisWasCreated.getTime();
  var Current_Difference_In_Time = currentHackGTDate.getTime() - currentDate.getTime();
  var diff = 100 - (Current_Difference_In_Time / Total_Difference_In_Time) * 100;

  return (
    <div className={styles.comingSoon}>
      <Center>
        <Text className={styles.comingSoonTitle}>Coming soon....</Text>
      </Center>
      <Progress
        draggable="false"
        bgColor={"gray.700"}
        className={styles.progressBar}
        colorScheme="customteal"
        height={"2.5rem"}
        value={diff}
      />
    </div>
  );
};

export default ComingSoon;
