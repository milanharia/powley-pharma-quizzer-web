import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";

export function LargeCard({
  title,
  subtitle,
  icon,
  bg,
  disabled = false,
  onClick,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bg: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <Flex
      onClick={onClick}
      bg={bg}
      borderRadius="0.5rem"
      justifyContent="space-between"
      padding="4"
      alignItems="center"
      opacity={disabled ? 0.75 : 1}
      cursor={disabled ? "not-allowed" : "pointer"}
      _hover={disabled ? undefined : { opacity: 0.9 }}
    >
      <Box>
        <Text color="light" fontSize="2xl">
          {title}
        </Text>
        <Text color="light">{subtitle}</Text>
      </Box>
      {icon}
    </Flex>
  );
}

export function SmallCard({
  title,
  subtitle,
  icon,
  bg,
  topic = false,
  disabled = false,
  slot,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bg: string;
  topic?: boolean;
  disabled?: boolean;
  slot?: "left" | "right";
}) {
  return (
    <Flex
      w={topic ? "11rem" : "10rem"}
      h={topic ? "10.5rem" : "9rem"}
      borderRadius="0.5rem"
      padding="4"
      ml={slot === "right" ? 0.25 : undefined}
      mr={slot === "left" ? 0.25 : undefined}
      bg={bg}
      direction="column"
      opacity={disabled ? 0.75 : 1}
      cursor={disabled ? "not-allowed" : "pointer"}
      _hover={disabled ? undefined : { opacity: 0.9 }}
    >
      <Box flex={1}>
        <Text color="light" fontSize={"xl"}>
          {title}
        </Text>
        <Text pt={topic ? 2 : undefined} color="light">
          {subtitle}
        </Text>
      </Box>
      <Flex justifyContent="end">{icon}</Flex>
    </Flex>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <Box borderRadius={4} bg="white" color="black" p={4} m={4}>
      {children}
    </Box>
  );
}
