import { Flex, Box, Text } from "@chakra-ui/react";
import {
  faChartLine,
  faHome,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TabBar() {
  return (
    <Flex
      justifyContent="space-between"
      px={8}
      borderRadius="0 0 0.5rem 0.5rem"
      py={2}
      alignItems="center"
      bg="white"
    >
      <TabBarButton title="Progression">
        <FontAwesomeIcon
          height="2rem"
          width="2rem"
          color="#A5A5A5"
          icon={faChartLine}
        />
      </TabBarButton>
      <TabBarButton active title="Home">
        <FontAwesomeIcon
          height="2rem"
          width="2rem"
          color="#7579E7"
          icon={faHome}
        />
      </TabBarButton>
      <TabBarButton title="Bookmarks">
        <FontAwesomeIcon
          height="2rem"
          width="2rem"
          color="#A5A5A5"
          icon={faBookmark}
        />
      </TabBarButton>
    </Flex>
  );
}

function TabBarButton({
  title,
  children,
  active = false,
}: {
  title: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      cursor={active ? "pointer" : "not-allowed"}
    >
      <Box p={2}>{children}</Box>
      <Text color={active ? "primary" : "#A5A5A5"}>{title}</Text>
    </Flex>
  );
}
