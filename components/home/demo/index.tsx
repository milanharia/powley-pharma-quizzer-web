import { Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import { TabBar } from "./components";
import { HomePage } from "./pages";
import { FinalPage } from "./pages/final";
import { OptionsPage } from "./pages/options";
import { QuizPage } from "./pages/quiz";
import { Pages } from "./types";

export function AppDemo() {
  const [activePage, setActivePage] = useState<Pages>(Pages.HOME);
  const [score, setScore] = useState(0);
  function setNextPage(nextPage: Pages) {
    setActivePage(nextPage);
  }
  function incrementScore() {
    setScore((prev) => prev + 1);
  }
  function resetScore() {
    setScore(0);
  }

  const showTabBar = activePage === Pages.HOME || activePage === Pages.OPTIONS;

  return (
    <Flex justifyContent={"center"}>
      <Flex
        backgroundImage={"./static/images/phone-background.png"}
        backgroundPosition="center"
        backgroundSize="cover"
        height={["90vh", "800px"]}
        width={["95vw", "400px"]}
        borderRadius="1rem"
        border="5px solid black"
        flexDirection="column"
      >
        <Box overflowX="scroll" flex={1}>
          {getActivePage(
            activePage,
            setNextPage,
            score,
            incrementScore,
            resetScore
          )}
        </Box>
        {showTabBar && <TabBar />}
      </Flex>
    </Flex>
  );
}

function getActivePage(
  activePage: Pages,
  setNextPage: (nextPage: Pages) => void,
  score?: number,
  incrementScore?: () => void,
  resetScore?: () => void
) {
  switch (activePage) {
    case Pages.HOME:
      return <HomePage setNextPage={setNextPage} />;
    case Pages.OPTIONS:
      return <OptionsPage setNextPage={setNextPage} />;
    case Pages.QUIZ:
      return (
        <QuizPage incrementScore={incrementScore} setNextPage={setNextPage} />
      );
    case Pages.FINAL:
      return (
        <FinalPage
          score={score}
          resetScore={resetScore}
          setNextPage={setNextPage}
        />
      );
    default:
      return <HomePage setNextPage={setNextPage} />;
  }
}
