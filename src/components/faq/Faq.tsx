import { Image, Text, VStack, Heading, Center, HStack } from "@chakra-ui/react";
import QA from "./QA";
import styles from "./Faq.module.scss";

import qas from "./FAQ.json";
import HardwareQ from "./HardwareQ";
import AdmissionQ from "./AdmissionQ";

const Faq = () => {
  return (
    <div className={styles.container}>
      <Center>
      <HStack spacing="2vw" alignItems="center">
          <Image
            className={styles.star_blue}
            src="/svg/faq/star.svg"
            alt="star"
          />
          <Heading className={styles.title}>FAQ</Heading>
          <Image
            className={styles.star_blue}
            src="/svg/faq/star.svg"
            alt="star"
          />
        </HStack>
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
