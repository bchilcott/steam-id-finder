import { chakra, Text, useColorMode } from "@chakra-ui/react";

export default function Footer() {
  const { toggleColorMode } = useColorMode();

  return (
    <chakra.footer display={{ base: "none", md: "block" }}>
      <Text color="grey" pb="10px">
        Made with{" "}
        <chakra.span onClick={toggleColorMode} _hover={{ cursor: "pointer" }}>
          💖
        </chakra.span>{" "}
        by{" "}
        <chakra.a
          href="https://github.com/bchilcott"
          _hover={{ textDecoration: "underline" }}
        >
          Scythern
        </chakra.a>
      </Text>
    </chakra.footer>
  );
}
