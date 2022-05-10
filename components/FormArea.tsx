import { Box, chakra, Heading, Stack, Text } from "@chakra-ui/react";
import MainForm from "./MainForm";
import CollectionCard from "./CollectionCard";

export default function FormArea() {
  return (
    <Stack maxWidth={600} spacing="20px">
      <Box>
        <Heading textAlign={"center"} mb="5px">
          Workshop Collection IDs
        </Heading>
        <Text textAlign={"center"}>
          Please enter a{" "}
          <chakra.span color="blue.400" fontWeight="bold">
            Collection URL
          </chakra.span>{" "}
          to get the IDs for all listed workshop items.
        </Text>
      </Box>
      <MainForm />
      <CollectionCard />
    </Stack>
  );
}
