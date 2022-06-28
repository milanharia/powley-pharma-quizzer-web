import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Input,
  Link as ChakraLink,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  return (
    <Flex
      as={"header"}
      position={["unset", "sticky"]}
      top="0"
      height="4rem"
      zIndex={999}
      justifyContent={"space-between"}
      alignItems="center"
      bg={colorMode === "light" ? "white" : "dark"}
      boxShadow="0px 3px 5px 0px rgba(0,0,0,0.05)"
    >
      <Flex>
        <Box padding="4">
          <Image
            maxH="4rem"
            maxW="4rem"
            src={
              colorMode === "light"
                ? "./static/images/logo.png"
                : "./static/images/classic-mode-logo.png"
            }
            alt="Powley Pharma Quizzer"
          />
        </Box>
      </Flex>
      <Flex
        display={["none", "none", "flex"]}
        gap={10}
        padding={8}
        alignItems="center"
      >
        <ChakraLink fontSize="2xl">Our App</ChakraLink>

        <ChakraLink fontSize="2xl">Quiz</ChakraLink>

        <ChakraLink fontSize="2xl">About Us</ChakraLink>

        <Flex gap={1.5}>
          <SunIcon />
          {/* <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} /> */}
          <MoonIcon />
        </Flex>
      </Flex>
      <IconButton
        variant="link"
        aria-label="menu-button"
        display={["block", "block", "none"]}
        ref={btnRef}
        colorScheme="black"
        onClick={() => setIsOpen(true)}
        pr={4}
      >
        <HamburgerIcon />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={() => setIsOpen(false)}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Powley Pharma Quizzer</DrawerHeader>
          <DrawerBody>
            <Flex gap={4} flexDirection="column">
              <ChakraLink fontSize="2xl">Our App</ChakraLink>
              <ChakraLink fontSize="2xl">Quiz</ChakraLink>
              <ChakraLink fontSize="2xl">About Us</ChakraLink>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Flex gap={1.5} justifyContent="start">
              <SunIcon />
              <Switch
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
              />
              <MoonIcon />
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
