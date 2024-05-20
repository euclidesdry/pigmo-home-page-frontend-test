import React, { PropsWithChildren } from "react";

import { Box, styled } from "../../styled-system/jsx";

import Header from "./Header";

export default function Main({ children }: PropsWithChildren) {
  return (
    <styled.main w="full">
      <Header />

      <styled.section flex="1">{children}</styled.section>

      <styled.footer bg="indigo.500" p="4" textAlign="center">
        <Box>&copy; 2024 Pigmo. All rights reserved.</Box>
      </styled.footer>
    </styled.main>
  );
}
