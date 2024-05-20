// components/Layout.tsx
import React, { ReactNode } from "react";
import { Flex } from "../../styled-system/jsx";

import Sidebar from "./Sidebar";
import Main from "./Main";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="row" maxHeight="100%" bg="elevation-1" color="white">
      <Sidebar />
      <Main>{children}</Main>
    </Flex>
  );
}
