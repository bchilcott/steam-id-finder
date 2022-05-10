import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const config = {
  initialColorMode: "light",
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      // bg: mode("gray.100", "#121214")(props),
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
