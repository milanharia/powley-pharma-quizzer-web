import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import {
  Box,
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
      top="0"
      height="4rem"
      zIndex={999}
      justifyContent={"space-between"}
      alignItems="center"
      background="none"
    >
      <Flex>
        <Link href="/" passHref>
          <Box p={4}>
            <Image
              cursor="pointer"
              maxH="4rem"
              maxW="4rem"
              px={colorMode === "light" ? 0 : 3}
              src={
                colorMode === "light"
                  ? "./static/images/new-logo.png"
                  : "./static/images/classic-mode-logo.png"
              }
              alt="Powley Pharma Quizzer"
            />
          </Box>
        </Link>
      </Flex>
      <Flex
        display={["none", "none", "flex"]}
        gap={10}
        padding={8}
        alignItems="center"
      >
        <Link href="/" passHref>
          <ChakraLink fontSize="2xl">Home</ChakraLink>
        </Link>
        <Link href="/about" passHref>
          <ChakraLink fontSize="2xl">About Us</ChakraLink>
        </Link>
        <Flex gap={1.5}>
          <SunIcon />
          <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
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
        mr={4}
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
              <Link href="/" passHref>
                <ChakraLink fontSize="2xl">Home</ChakraLink>
              </Link>
              <Link href="/about" passHref>
                <ChakraLink fontSize="2xl">About Us</ChakraLink>
              </Link>
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
