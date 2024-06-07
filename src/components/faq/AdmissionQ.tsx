import { Box, Collapse, Text, Image, HStack } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./Faq.module.scss";

const QA = () => {
  const [questionClicked, setQuestionClicked] = useState(false);

  return (
    <div className={styles.qa_shape}>
      <Box
        className={styles.clickable}
        onClick={() => {
          setQuestionClicked(!questionClicked);
        }}>
        <HStack>
          <Text
            className={`${styles.question} ${styles.both}`}
            fontFamily="Scrapbook">
            How does the admissions process work?
          </Text>
          {questionClicked ? (
            <Image
              className={styles.arrow}
              alt="arrow up"
              src="svg/faq/up_arrow.svg"
            />
          ) : (
            <Image
              alt="arrow down"
              className={styles.arrow}
              src="/svg/faq/down_arrow.svg"
            />
          )}
        </HStack>
      </Box>
      {questionClicked ? (
        <Text
          className={`${styles.answer} ${styles.both}`}
          fontFamily="Be Vietnam Pro">
          If {"you're"} interested in our admissions process you can read more{" "}
          <a
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@thehexlabs/hackgt-9-admissions-9129effe4467">
            here
          </a>{" "}
          !
        </Text>
      ) : (
        <div />
      )}
    </div>
  );
};

export default QA;
