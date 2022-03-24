import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AppInformationProps {
  children: React.ReactElement;
  slot?: "start" | "end";
  backgroundColor?: string;
  id?: string;
}

const AppInformation = ({
  children,
  slot = "end",
  backgroundColor = "",
  id,
}: AppInformationProps) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const duration = 0.4;

  const startVariants = {
    hidden: { x: "-100vw" },
    visible: { x: 0 },
  };
  const endVariants = {
    hidden: { x: "100vw" },
    visible: { x: 0 },
  };

  return (
    <Box id={id} ref={ref} backgroundColor={backgroundColor} paddingY={32}>
      <SimpleGrid columns={2}>
        {slot === "start" && (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={startVariants}
            transition={{ duration }}
          >
            <Center padding={32}>{children}</Center>
          </motion.div>
        )}
        <Center>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={slot === "start" ? endVariants : startVariants}
            transition={{ duration }}
          >
            <Image src="./static/images/phone.png" alt="app preview" />
          </motion.div>
        </Center>
        {slot === "end" && (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={endVariants}
            transition={{ duration }}
          >
            <Center padding={32}>{children}</Center>
          </motion.div>
        )}
      </SimpleGrid>
    </Box>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Powley Pharma Quizzer</title>
        <meta name="description" content="Test your pharmacy knowledge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box h="100vh">
          <SimpleGrid h="100%" columns={[1, 1, 2, 2]}>
            <Flex flexDirection="column">
              <Flex padding={8}>
                <Image
                  src={"./static/images/logo.png"}
                  alt="Powley Pharma Quizzer"
                />
              </Flex>

              <Flex flex="1" alignItems="center" marginTop={-36} p={16}>
                <Stack spacing={8}>
                  <Heading fontSize="title">
                    Powley Pharma <br />
                    Quizzer
                  </Heading>
                  <Text fontSize="2xl" fontWeight="light">
                    Created by the students, for the students
                  </Text>
                  <ButtonGroup>
                    <Button size="lg" colorScheme="twitter">
                      Download
                    </Button>
                    <Button
                      size="lg"
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
                  </ButtonGroup>
                </Stack>
              </Flex>
            </Flex>
            <Flex
              display={["none", "none", "flex", "flex"]}
              overflow="hidden"
              flexDirection="column"
              borderLeftRadius={16}
              bg="primary"
            >
              <Flex justifyContent="flex-end">
                <Flex gap={10} padding={8}>
                  {/* <ChakraLink color="light" fontSize="2xl"> */}
                  <Text
                    color={"light"}
                    fontSize="2xl"
                    transition={"1"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    <Link href="#">Our App</Link>
                  </Text>
                  {/* </ChakraLink> */}
                  {/* <ChakraLink color="light" fontSize="2xl"> */}
                  <Text
                    color={"light"}
                    fontSize="2xl"
                    _hover={{ textDecoration: "underline" }}
                  >
                    <Link href="#">Quiz</Link>
                  </Text>
                  {/* </ChakraLink> */}
                  {/* <ChakraLink color="light" fontSize="2xl"> */}
                  <Text
                    color={"light"}
                    fontSize="2xl"
                    _hover={{ textDecoration: "underline" }}
                  >
                    <Link href="#">About Us</Link>
                  </Text>
                  {/* </ChakraLink> */}
                </Flex>
              </Flex>
              <Flex
                flex="1"
                flexDirection="column"
                justifyContent="space-between"
                width={["336px"]}
                margin="auto"
                gap={16}
              >
                <Flex height="100%" alignItems={"end"}>
                  <Text color="light" fontWeight="semibold" fontSize="2xl">
                    For easier pre-registration GPhC exam revision on the go
                  </Text>
                </Flex>

                <Box marginBottom="-20px">
                  <Image
                    src="./static/images/hero-phone.png"
                    alt="app preview"
                  />
                </Box>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Box>
        <AppInformation id="info">
          <Text fontSize={"3xl"}>
            Randomly generate an unlimited amount of quizzes to help you revise
            on the go
          </Text>
        </AppInformation>
        <AppInformation slot="start" backgroundColor="primary">
          <Text fontSize={"3xl"} color="light">
            Each question gives instant feedback, with an explanation of the
            correct answer, and where to find the information in relevant
            sources such as the BNF
          </Text>
        </AppInformation>
        <AppInformation>
          <Text fontSize={"3xl"}>
            View your results and the questions you completed.
          </Text>
        </AppInformation>
      </main>
    </>
  );
};

export default Home;
