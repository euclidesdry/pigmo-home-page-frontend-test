import React from "react";
import { css } from "../../styled-system/css";
import { Box, Flex, styled } from "../../styled-system/jsx";

export default function Header() {
  return (
    <Box bg="colorPalette.700" p="4">
      <Flex justify="space-between" align="center">
        <Box>LOGO</Box>
        <Box>
          <button>Login</button>
          <button>Register</button>
        </Box>
      </Flex>
    </Box>
  );
}
