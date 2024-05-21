// components/Layout.tsx
import React, { PropsWithChildren } from "react";
import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Flex,
  FlexProps,
} from "../../styled-system/jsx";

import Sidebar from "./Sidebar";
import Main from "./Main";

type LayoutProps = PropsWithChildren<FlexProps>;

export default function Layout({ children, ...props }: LayoutProps) {
  return (
    <Flex
      direction="row"
      maxHeight="100%"
      bg="elevation-1"
      color="white"
      {...props}
    >
      <Sidebar />
      <Main>{children}</Main>
    </Flex>
  );
}

type LayoutContainerProps = PropsWithChildren<BoxProps> & {
  containerProps?: ContainerProps;
};

Layout.Container = function LayoutContainer({
  children,
  containerProps,
  ...props
}: LayoutContainerProps) {
  return (
    <Box pt="10" pb="14" {...props}>
      <Container maxW="7xl" {...containerProps}>
        <Flex flexDirection="column" gap="14">
          {children}
        </Flex>
      </Container>
    </Box>
  );
};
