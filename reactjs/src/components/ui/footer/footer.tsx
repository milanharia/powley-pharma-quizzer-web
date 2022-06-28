import { Box, Flex, Text, useColorMode, HStack } from "@chakra-ui/react";

export function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      bg={colorMode === "light" ? "light" : "dark"}
      justifyContent="space-between"
      p={8}
    >
      <Text>&copy; Powley Pharma - All rights reserved</Text>
      <HStack>
        <Box>Apple</Box>
        <Box>Android</Box>
        <Box>Facebook</Box>
        <Box>Instagram</Box>
      </HStack>
    </Flex>
  );
}
