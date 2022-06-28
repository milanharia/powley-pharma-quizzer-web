import { Flex, Text, useColorMode, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Icon({ children: src }: { children: string }) {
  const icon = src.split(".")[0];
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Image
        _hover={{ cursor: "pointer" }}
        h={6}
        w={6}
        src={`./static/icons/${src}`}
        alt={icon}
      />
    </motion.div>
  );
}

export function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      flexDir={["column", "row"]}
      bg={colorMode === "light" ? "light" : "dark"}
      justifyContent={["center", "space-between"]}
      p={8}
      mt={8}
    >
      <Text m="auto">&copy; Powley Pharma - All rights reserved</Text>
      <HStack spacing={3} m="auto" pt={["0.5rem", 0]}>
        <Icon>apple.svg</Icon>
        <Icon>android.png</Icon>
        <Icon>facebook.svg</Icon>
        <Icon>instagram.svg</Icon>
      </HStack>
    </Flex>
  );
}
