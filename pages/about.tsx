import { Box, Fade, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Powley Pharma - Created by the students, for the students</title>
        <meta name="description" content="Test your pharmacy knowledge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Box maxW="1100px" px="1rem" pt={["1rem", "3rem"]} m="auto">
          <Heading fontSize={["4xl", "6xl"]}>About Us</Heading>
          <Text mt={[4, 8]} fontSize={["md", "xl"]} fontWeight="light">
            We are a group of recently registered pharmacists (and aspiring web
            developers) who graduated from the University of Nottingham. Our aim
            is to strengthen the knowledge of post-graduate pharmacy
            professionals in preparation for the GPhC exam. This project
            endeavours to provide affordable revision tools, as we believe that
            education should be easily accessible for all. The production of
            this website and app is an ongoing learning process for us, so
            please bear with us as we improve it and resolve bugs. Thank you for
            taking the time to visit our website!
            <br />
            <br /> A significant amount of time and money has been spent to
            create and maintain the app and this site, so we would greatly
            appreciate your support by downloading the app.
            <br />
            <br /> If you would like to contact us – whether you have a general
            enquiry, would like to report an error or give us feedback, please
            email powleypharma@gmail.com. Alternatively, please use the in-app
            error reporting tool. Please note that we do not work on this
            platform full-time and will try to respond as soon as possible.
          </Text>
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default About;
