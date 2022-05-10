import {
  Button,
  Collapse,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Textarea,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useAppSelector } from "../util/hooks";

export default function CollectionCard() {
  const data = useAppSelector((state) => state.data);
  const { hasCopied, onCopy } = useClipboard(getIDString());
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textareaColor = useColorModeValue("gray.400", "gray.500");

  function getIDString() {
    return data?.children.join(";") ?? "";
  }

  return (
    <Collapse in={!!data} animateOpacity>
      <Stack
        mt={3}
        p={5}
        rounded={"base"}
        border="1px"
        borderColor={borderColor}
      >
        <HStack>
          <Image src={data?.previewUrl} h={100} rounded="base" />
          <VStack flexGrow={1}>
            <Heading>{data?.title}</Heading>
            <Text>{data?.description}</Text>
          </VStack>
        </HStack>
        <Textarea value={getIDString()} isReadOnly color={textareaColor} />
        <Button colorScheme="blue" onClick={onCopy}>
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Stack>
    </Collapse>
  );
}
