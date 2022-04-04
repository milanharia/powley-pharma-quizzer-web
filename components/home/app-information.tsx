import { Box, SimpleGrid, Center, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AppInformationProps {
  children: React.ReactElement;
  slot?: "start" | "end";
  backgroundColor?: string;
  id?: string;
}

export function AppInformation({
  children,
  slot = "end",
  backgroundColor = "",
  id,
}: AppInformationProps) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const duration = 0.5;

  const startVariants = {
    hidden: { x: "-100vw" },
    visible: { x: 0 },
  };
  const endVariants = {
    hidden: { x: "100vw" },
    visible: { x: 0 },
  };

  return (
    <Box id={id} ref={ref} backgroundColor={backgroundColor} paddingY={32}>
      <SimpleGrid columns={2}>
        {slot === "start" && (
          <Center padding={[4, 4, 32, 32]}>{children}</Center>
        )}
        <Center padding={[4, 4, 32, 32]}>
          <Image src="./static/images/phone.png" alt="app preview" />
        </Center>
        {slot === "end" && <Center padding={[4, 4, 32, 32]}>{children}</Center>}
      </SimpleGrid>
    </Box>
  );
}
