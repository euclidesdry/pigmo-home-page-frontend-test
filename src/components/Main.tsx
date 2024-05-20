import React, { PropsWithChildren } from "react";

import { styled } from "../../styled-system/jsx";

import Header from "./Header";
import Footer from "./Footer";

export default function Main({ children }: PropsWithChildren) {
  return (
    <styled.main w="full">
      <Header />

      <styled.section flex="1">{children}</styled.section>

      <Footer />
    </styled.main>
  );
}
