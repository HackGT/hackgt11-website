import { Box, Collapse } from "@chakra-ui/react";
import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import styles from "./Faq.module.scss";

interface QAProps {
  key: string;
  question: string;
  answer: string;
}

const QA = (qap: QAProps) => {
  const [questionClicked, setQuestionClicked] = useState(false);

  return (
    <div className={styles.qa_shape}>
      <Box
        onClick={() => {
          setQuestionClicked(!questionClicked);
        }}
      >
        <Question open={questionClicked} question={qap.question} />
      </Box>
      {questionClicked ? <Answer answer={qap.answer} /> : <div />}
    </div>
  );
};

export default QA;
