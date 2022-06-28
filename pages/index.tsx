import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import { NextPage } from "next/types";
import { useState } from "react";
import { AppDemo, AppInformation } from "../components/home";
import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Head>
        <title>Powley Pharma - Created by the students, for the students</title>
        <meta name="description" content="Test your pharmacy knowledge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex
          h={"calc(100vh)"}
          w="100vw"
          flexDirection="column"
          backgroundImage={
            colorMode === "light"
              ? "url('./static/images/phone-background.png')"
              : undefined
          }
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          <Header />
          <Flex
            flexDirection="column"
            placeContent="center"
            flex={1}
            p={2}
            gap="4"
          >
            <motion.div
              initial={{ opacity: 0, y: 0, scaleX: 0.75 }}
              animate={{ opacity: 1, y: 0, scaleX: 1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              <Heading textAlign="center" fontSize={["4xl", "title"]}>
                Powley Pharma Quizzer
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Text align={"center"} fontSize={["md", "xl"]} fontWeight="light">
                Created by the students, for the students
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Flex justifyContent="center" gap={4}>
                <Button
                  as="a"
                  px={8}
                  size="md"
                  colorScheme="twitter"
                  href="https://linktr.ee/powleypharma"
                >
                  Download
                </Button>
                <Button
                  size={"md"}
                  colorScheme="teal"
                  variant="outline"
                  onClick={() =>
                    document
                      .getElementById("info")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Find out more
                </Button>
              </Flex>
            </motion.div>
          </Flex>
          <Flex justifyContent={"center"} alignItems="end" overflowY="hidden">
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <Image
                maxH="50vh"
                src="./static/images/hero-phone.png"
                alt="app preview"
              />
            </motion.div>
          </Flex>
        </Flex>
        <AppInformation
          id="info"
          backgroundColor={
            colorMode === "light" ? "custom.light" : "custom.dark"
          }
        >
          <Text fontSize={["lg", "lg", "2xl", "3xl"]}>
            Randomly generate an unlimited amount of quizzes to help you revise
            on the go
          </Text>
        </AppInformation>
        <AppInformation slot="start">
          <Text fontSize={["lg", "lg", "2xl", "3xl"]}>
            Each question gives instant feedback, with an explanation of the
            correct answer, and where to find the information in relevant
            sources such as the BNF
          </Text>
        </AppInformation>
        <AppInformation
          backgroundColor={
            colorMode === "light" ? "custom.light" : "custom.dark"
          }
        >
          <Text fontSize={["lg", "lg", "2xl", "3xl"]}>
            View your results and the questions you completed.
          </Text>
        </AppInformation>
        <Box h={["auto", "auto", "100vh", "100vh"]} py={16} px={4}>
          <Center>
            <motion.div
              initial="hidden"
              // animate={controls}
              // variants={slot === "start" ? endVariants : startVariants}
              // transition={{ duration }}
            >
              <VStack spacing={8}>
                <Text
                  fontSize={["lg", "lg", "2xl", "3xl"]}
                  textAlign="center"
                  pt={4}
                >
                  Try a demo of the app here and see for yourself...
                </Text>
                <Box display={["block", "block", "none", "none"]}>
                  <Button
                    colorScheme="twitter"
                    size="lg"
                    onClick={() => setOpenModal(true)}
                  >
                    Try demo
                  </Button>
                  <Modal
                    onClose={() => setOpenModal(false)}
                    size={"full"}
                    isOpen={openModal}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Powley Pharma Quizzer Demo</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <AppDemo />
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Box>
                <Box display={["none", "none", "block", "block"]}>
                  <AppDemo />
                  <Box></Box>
                </Box>
                <Text fontStyle="italic" textAlign="center" pb={4}>
                  *Please note this demo does not replicate the look and feel of
                  the mobile application and is only meant as a guide.
                </Text>
              </VStack>
            </motion.div>
          </Center>
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default Home;
