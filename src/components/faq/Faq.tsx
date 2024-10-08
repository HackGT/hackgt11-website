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
          entry.question != "specialQs" && (
            <QA
              key={entry.question}
              question={entry.question}
              answer={entry.answer}
            />
          )
        )}
      </VStack>
      <VStack className={styles.registration} spacing="2vw">
        <Heading className={styles.title}>REGISTRATION</Heading>
        <Text className={styles.note}>
          This year, we will have 2 rounds of applications: <i><b>early bird</b></i> and <i><b>regular</b></i> admission. 
          Both groups of applicants will get results at the same time before the hackathon, but early bird 
          applications will get a higher chance of securing a spot! Early Bird ends <i><b>September 1st 11:59 pm</b></i> and 
          right after this period, regular applications will be taken until <i><b>September 8th 11:59pm</b></i>.
        </Text>
        <Text className={styles.note} fontWeight="bold" bgColor="rgba(181,59,39, 0.75)" padding={{ base: "1.5vw", lg: "1.2vw" }} borderRadius={{ base: "15px", lg: "20px" }}><a href="https://registration.hexlabs.org/">Register NOW here!</a></Text>
      </VStack>
      <VStack className={styles.travel} spacing="2vw">
        <Heading className={styles.title}>TRAVEL REIMBURSEMENT</Heading>
        <Text className={styles.note}>
          All students seeking gas reimbursement must register before <i><b>August 16th</b></i>. 
          We don't want anything to stop our hackers from being able to experience HackGT 11, including transportation! 
          This year we will be offering travel aid through reimbursements. 
          Check out <a href="https://hexlabs.notion.site/HackGT-11-Travel-Assistance-a381305832f249ed8d23c5ca4d272021"><u><b>this</b></u></a> page for more information.
        </Text>
      </VStack>
    </div>
  );
};

export default Faq;
