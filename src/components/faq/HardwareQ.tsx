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
            Will hardware be provided?
          </Text>
          {questionClicked ? (
            <Image
              className={styles.arrow}
              alt="arrow up"
              src="/svg/faq/up_arrow.svg"
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
          We will provide hardware to any participant needing it for their
          project at our hardware desk! If {"you'd"} like to have a say in what
          type of hardware will be provided at the event, please fill out this{" "}
          <a
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdnM-6WfRD-EygANcL0aSCbQBlwlmT_6l4kebUSb89GxpW7gg/viewform">
            form
          </a>{" "}
          so our team knows what {"you're"} interested in.
        </Text>
      ) : (
        <div />
      )}
    </div>
  );
};

export default QA;
