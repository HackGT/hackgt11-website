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
        <HStack spacing="2vw" alignItems="center" marginY="5%">
          <Image
            className={styles.star_plum}
            src="/svg/faq/star_plum.svg"
            alt="star"
          />
          <Heading className={styles.title}>FAQ</Heading>
          <Image
            className={styles.star_plum}
            src="/svg/faq/star_plum.svg"
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
      <VStack className={styles.registration} spacing="2vw">
        <Heading className={styles.reg_title}>REGISTRATION</Heading>
        <Text>This year, we will have 2 rounds of applications: <b>early bird</b> and <b>regular admission</b>. 
          Both groups of applicants will get results at the same time before the hackathon, but early bird 
          applications will get a higher chance of securing a spot! Early Bird ends <b>September 1st 11:59 pm</b> and 
          right after this period, regular applications will be taken until <b>September 8th 11:59pm</b>.
        </Text>
        <Text fontWeight="bold" bgColor="rgba(181,59,39, 0.75)" padding="1vw" borderRadius="30px"><a href="https://registration.hexlabs.org/">Register NOW here!</a></Text>
      </VStack>
    </div>
  );
};

export default Faq;
