import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

interface ToolbarProps {
  children: string;
  handleGoBack?: () => void;
  start?: React.ReactNode;
  end?: React.ReactNode;
}

export function Toolbar({ children, handleGoBack, start, end }: ToolbarProps) {
  return (
    <Grid
      // backdropFilter="blur(0px)"
      justifyContent={handleGoBack ? "space-between" : "center"}
      alignItems="center"
      templateColumns="repeat(12, 1fr)"
      pt={4}
      height={14}
      bg="rgba(255,255,255,0.9)"
      borderRadius="0.5rem 0.5rem 0 0"
    >
      <GridItem colSpan={2}>
        <Flex justifyContent="start">
          {handleGoBack ? (
            <Button variant="link" onClick={handleGoBack}>
              <Flex alignItems="center">
                <ChevronLeftIcon color="primary" mr="-1" h={8} w={8} />
                <Text color="primary">Back</Text>
              </Flex>
            </Button>
          ) : start ? (
            start
          ) : null}
        </Flex>
      </GridItem>
      <GridItem colSpan={8}>
        <Flex justifyContent="center">
          <Text fontWeight="semibold" color="dark">
            {children}
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={2}>
        {" "}
        <Flex justifyContent="end">{end ? end : null}</Flex>
      </GridItem>
    </Grid>
  );
}
