import { Center, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import FormArea from "../components/FormArea";

const Home: NextPage = () => {
  return (
    <VStack h="100vh">
      <Center
        flexGrow={1}
        w={{ md: "100%", base: "80%" }}
        flexDirection="column"
      >
        <FormArea />
      </Center>
      <Footer />
    </VStack>
  );
};

export default Home;
