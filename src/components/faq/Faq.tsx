import { Image, Text, VStack, Heading, Center } from "@chakra-ui/react";
import QA from "./QA";
import styles from "./Faq.module.scss";

import qas from "./FAQ.json";
import HardwareQ from "./HardwareQ";
import AdmissionQ from "./AdmissionQ";

const Faq = () => {
  return (
    <div className={styles.container}>
      <Center>
        <Heading fontSize={{ base: "28px", lg: "48px" }} paddingBottom="20px">
          FAQ
        </Heading>
      </Center>
      <VStack spacing={"20px"}>
        {qas.qas.map((entry) =>
          // IMPORTANT uncomment once the blog post is made
          entry.question == "specialQs" ? (
            <div key="null">
              {/* look at this great css. there's got to be a way to store links in a uniform data format */}
              {/* <AdmissionQ />
              <div id={styles.space} />
              <HardwareQ /> */}
            </div>
          ) : (
            <QA
              key={entry.question}
              question={entry.question}
              answer={entry.answer}
            />
          )
        )}
      </VStack>
    </div>
  );
};

export default Faq;
