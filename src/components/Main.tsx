import React, { PropsWithChildren } from "react";

import { css } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";

import Header from "./Header";
import Footer from "./Footer";

export default function Main({ children }: PropsWithChildren) {
  return (
    <styled.main
      w="full"
      h="100vh"
      maxH="100vh"
      className={css({ overflowY: "auto" })}
    >
      <Header />

      <styled.section flex="1">{children}</styled.section>

      <Footer />
    </styled.main>
  );
}
