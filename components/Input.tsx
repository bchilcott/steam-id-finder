import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = ChakraInputProps & {
  error?: boolean;
};

export default function Input(props: InputProps) {
  const errorProps = {
    borderColor: "red",
    _focus: { borderColor: "red" },
    _hover: { borderColor: "red" },
  };

  const { error, ...chakraProps } = props;

  return <ChakraInput {...chakraProps} {...(error ? errorProps : {})} />;
}
