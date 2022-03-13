import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  HStack,
  Img,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

interface AppInformationProps {
  children: React.ReactElement;
  slot?: "start" | "end";
  backgroundColor?: string;
}

const AppInformation = ({
  children,
  slot = "end",
  backgroundColor = "",
}: AppInformationProps) => {
  return (
    <Box backgroundColor={backgroundColor} paddingY={32}>
      <SimpleGrid columns={2}>
        {slot === "start" && <Center padding={32}>{children}</Center>}
        <Center>
          <Image
            src="/../public/assets/phone.png"
            alt="app preview"
            height={697}
            width={336}
          />
        </Center>
        {slot === "end" && <Center padding={32}>{children}</Center>}
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
                  src="/../public/assets/logo.png"
                  alt="Powley Pharma Quizzer"
                  width={75}
                  height={50}
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
                    <Button size="lg" colorScheme="teal" variant="outline">
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
                <HStack spacing={10} padding={8}>
                  <ChakraLink color="light" fontSize="2xl">
                    <Link href="#">Our App</Link>
                  </ChakraLink>
                  <ChakraLink color="light" fontSize="2xl">
                    <Link href="#">Quiz</Link>
                  </ChakraLink>
                  <ChakraLink color="light" fontSize="2xl">
                    <Link href="#">About Us</Link>
                  </ChakraLink>
                </HStack>
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
                    src="/../public/assets/hero-phone.png"
                    alt="app preview"
                    height={552}
                    width={336}
                  />
                </Box>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Box>
        <AppInformation>
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
