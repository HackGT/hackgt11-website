import { Text } from "@chakra-ui/react";
import styles from "./Faq.module.scss";

interface AnswerProps {
  answer: string;
}

const Answer = (ap: AnswerProps) => {
  return (
    <Text
      className={`${styles.answer} ${styles.both}`}
      fontFamily="Be Vietnam Pro"
      fontStyle={"normal"}
      fontSize={{ base: "15px", lg: "20px" }}
      marginLeft="15px">
      {ap.answer}
    </Text>
  );
};

export default Answer;
