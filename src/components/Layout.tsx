// components/Layout.tsx
import React, { ReactNode } from "react";
import { Box, Flex, styled } from "../../styled-system/jsx";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="row" minHeight="100vh" bg="elevation-1" color="white">
      <Sidebar />
      <styled.main bg="blue.700" w="full">
        <Box bg="colorPalette.700" p="4">
          <Flex justify="space-between" align="center">
            <Box>LOGO</Box>
            <Box>
              <button>Login</button>
              <button>Register</button>
            </Box>
          </Flex>
        </Box>
        <Box as="section" flex="1">
          {children}
        </Box>
        <Box as="footer" bg="indigo.500" p="4" textAlign="center">
          <Box>&copy; 2024 Pigmo. All rights reserved.</Box>
        </Box>
      </styled.main>
    </Flex>
  );
}
