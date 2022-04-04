import { Flex, Box, Text, Stack, Button, SlideFade } from "@chakra-ui/react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card, Toolbar } from "../components";
import { DataPageProps, Pages } from "../types";

export function FinalPage({ setNextPage, score, resetScore }: DataPageProps) {
  const scorePercentage = Math.floor(((score || 0) / 10) * 100) || 0;
  return (
    <SlideFade in={true} offsetY="20px">
      <Flex flexDirection="column">
        <Toolbar>Quiz Complete</Toolbar>
        <Card>
          <Stack spacing={4}>
            <Text fontWeight="bold" fontSize="2xl" color="dark">
              Your Results
            </Text>
            <Flex justifyContent="center">
              <Box w={36} h={36}>
                <CircularProgressbarWithChildren
                  value={scorePercentage}
                  styles={buildStyles({
                    pathColor: `${
                      scorePercentage < 70 ? "#e44444" : "#36cf69"
                    }`,
                  })}
                >
                  <Text
                    fontWeight="bold"
                    fontSize="2xl"
                    color={scorePercentage < 70 ? "#e44444" : "#36cf69"}
                    className={`${
                      scorePercentage < 70 ? "text-secondary" : "text-tertiary"
                    } text-3xl font-bold`}
                  >
                    {scorePercentage + "%"}
                  </Text>
                </CircularProgressbarWithChildren>
              </Box>
            </Flex>
            <Stack>
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="dark">Correct answers:</Text>
                <Text fontWeight="semibold" color="#36cf69">
                  {score ?? 0}
                </Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="dark">Incorrect answers:</Text>
                <Text fontWeight="semibold" color="#e44444">
                  {score ? 10 - score : 10}
                </Text>
              </Flex>
            </Stack>

            <Stack>
              <Button
                borderRadius="2rem"
                colorScheme="blue"
                onClick={() => {
                  setNextPage(Pages.HOME);
                  resetScore && resetScore();
                }}
              >
                Back to home
              </Button>
              <Button borderRadius="2rem" colorScheme="blue" isDisabled>
                Review answers
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Flex>
    </SlideFade>
  );
}
