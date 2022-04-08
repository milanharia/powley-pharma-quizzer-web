import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Heading, Box, Text, Image, SlideFade } from "@chakra-ui/react";
import {
  faBookmark,
  faChartLine,
  faHeartbeat,
  faLaptopMedical,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LargeCard, SmallCard } from "../components";
import { PageProps, Pages } from "../types";

export function HomePage({ setNextPage }: PageProps) {
  return (
    <SlideFade in={true} offsetY="20px">
      <Flex flexDirection="column" gap={3} pt={4}>
        <Flex flexDirection="column" px={4} gap={3}>
          <Flex flexDirection="column" gap="2">
            <HamburgerIcon color="dark" fontSize="2xl" />
            <Heading color="dark">Welcome Back</Heading>
          </Flex>
          <LargeCard
            onClick={() => setNextPage(Pages.OPTIONS)}
            bg="linear-gradient(180deg, #75bbf1 0%, #1587de 100%)"
            title="Classic Mode"
            subtitle="Mixture of all topics"
            icon={
              <Image
                src="./static/images/classic-mode-logo.png"
                alt="Powley Pharma Quizzer"
                h={"4rem"}
                w={"4rem"}
              />
            }
          />
          <Flex justifyContent={"space-between"}>
            <SmallCard
              slot="left"
              disabled
              bg="linear-gradient(0deg, #fda980 0%, #f7cb6d 100%)"
              title="Bookmarks"
              subtitle="View your saved questions"
              icon={
                <FontAwesomeIcon
                  height={"2rem"}
                  width="2rem"
                  color="#B9FFFC"
                  icon={faBookmark}
                />
              }
            />
            <SmallCard
              slot="right"
              disabled
              bg="linear-gradient(180deg, #fa3b74 0%, #f17da0 100%)"
              title="Progression"
              subtitle="Track your progress"
              icon={
                <FontAwesomeIcon
                  height={"2rem"}
                  width="2rem"
                  color="#B9FFFC"
                  icon={faChartLine}
                />
              }
            />
          </Flex>
          <Text color="dark" fontSize="2xl">
            Questions by topic
          </Text>
        </Flex>
        <Flex pl={4} gap="2" overflowX="hidden">
          <Box w="12rem">
            <SmallCard
              disabled
              bg="linear-gradient(180deg, #ff5a5a 0%, #ad0202 100%)"
              topic
              title="Cardiovascular"
              subtitle="Exam weighting: High"
              icon={
                <FontAwesomeIcon
                  height={"2rem"}
                  width="2rem"
                  color="#B9FFFC"
                  icon={faHeartbeat}
                />
              }
            />
          </Box>
          <Box w="12rem">
            <SmallCard
              disabled
              bg="linear-gradient(180deg, #ff934c 0%, #fc686f 100%)"
              topic
              title="Endocrine"
              subtitle="Exam weighting: High"
              icon={
                <FontAwesomeIcon
                  height={"2rem"}
                  width="2rem"
                  color="#B9FFFC"
                  icon={faLaptopMedical}
                />
              }
            />
          </Box>
          <Box w="12rem">
            <SmallCard
              disabled
              topic
              bg="linear-gradient(180deg, #ee609c 0%, #b564d9 100%)"
              title="Nervous System"
              subtitle="Exam weighting: High"
              icon={
                <FontAwesomeIcon
                  height={"2rem"}
                  width="2rem"
                  color="#B9FFFC"
                  icon={faArrowUpFromBracket}
                />
              }
            />
          </Box>
        </Flex>
        <Box px={4} pb={4}>
          <LargeCard
            disabled
            bg="linear-gradient(0deg, #fda980 0%, #f7cb6d 100%)"
            title="Enjoying the quiz?"
            subtitle="Tap to share this app with your friends!"
            icon={
              <FontAwesomeIcon
                height={"2rem"}
                width="2rem"
                color="#B9FFFC"
                icon={faArrowUpFromBracket}
              />
            }
          />
        </Box>
      </Flex>
    </SlideFade>
  );
}
