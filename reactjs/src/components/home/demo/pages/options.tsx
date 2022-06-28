import { InfoIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Text,
  Stack,
  Tab,
  TabList,
  Tabs,
  Switch,
  Button,
  SlideFade,
} from "@chakra-ui/react";
import { Card, Toolbar } from "../components";
import { PageProps, Pages } from "../types";

export function OptionsPage({ setNextPage }: PageProps) {
  return (
    <SlideFade in={true} offsetY="20px">
      <Flex flexDirection="column">
        <Toolbar handleGoBack={() => setNextPage(Pages.HOME)}>
          Quiz Options
        </Toolbar>
        <Card>
          <Stack spacing={4}>
            <Text fontSize="2xl">Quiz Options</Text>
            <Box>
              <Text>Number of questions</Text>
              <Tabs p={4} isFitted variant="line">
                <TabList>
                  <Tab>10</Tab>
                  <Tab isDisabled>20</Tab>
                  <Tab isDisabled>40</Tab>
                </TabList>
              </Tabs>
              <Flex justifyContent="space-between" alignItems="center" p={4}>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  gap={2}
                >
                  <Text>Enable Timer</Text>
                  <InfoIcon />
                </Flex>
                <Switch color="dark" colorScheme="blue" isDisabled />
              </Flex>
            </Box>
            <Button
              onClick={() => setNextPage(Pages.QUIZ)}
              borderRadius={"2rem"}
              isFullWidth
              colorScheme="blue"
            >
              Start Quiz
            </Button>
          </Stack>
        </Card>
      </Flex>
    </SlideFade>
  );
}
