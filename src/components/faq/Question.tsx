import { HStack, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./Faq.module.scss";

interface QuestionProps {
  question: string;
  open: boolean;
}

const Question = (qp: QuestionProps) => {
  const [arrowDirection, setArrowDirection] = useState(false);

  return (
    <HStack
      className={styles.clickable}
      onClick={() => {
        setArrowDirection(!arrowDirection);
      }}>
      <Text
        className={`${styles.question} ${styles.both}`}
        fontFamily="Scrapbook"
        fontSize={{ base: "18px", lg: "22px" }}>
        {qp.question}
      </Text>
      {arrowDirection ? (
        <Image
          className={styles.arrow}
          alt="arrow up"
          fontStyle="bold"
          src="/svg/faq/up_arrow.svg"
        />
      ) : (
        <Image
          className={styles.arrow}
          alt="arrow down"
          src="/svg/faq/down_arrow.svg"
        />
      )}
    </HStack>
  );
};

export default Question;
