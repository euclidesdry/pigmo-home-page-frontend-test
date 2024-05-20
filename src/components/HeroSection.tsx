// components/HeroSection.tsx
import React from "react";

import { css } from "../../styled-system/css";
import { Box, Container, Flex, styled } from "../../styled-system/jsx";

import Button from "./Button";

export default function HeroSection() {
  return (
    <Box
      borderBottom="1px solid token(colors.elevation-3)"
      className={css({
        backgroundImage: `url("/assets/images/bg/img-casino.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        backgroundSize: "",
      })}
    >
      <Box
        className={css({
          backgroundImage: `url("/assets/images/bg/bg-gradient.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          backgroundSize: "",
        })}
      >
        <Container
          maxW="7xl"
          p="8"
          minH="350px"
          display="flex"
          alignItems="center"
        >
          <Flex direction="column" justifyContent="center" maxW="50%">
            <Box mb="8">
              <styled.h1 fontSize="h1" fontWeight="bold">
                Boas vindas ao{" "}
                <styled.strong color="primary">Pigmo</styled.strong>!
              </styled.h1>
              <styled.p fontSize="hero" color="low-contrast" pe="36">
                Jogue inteligente conosco. Crie sua conta ou entre agora para
                ganhar recompensas.
              </styled.p>
            </Box>

            <Flex gap="2">
              <Button variant="filled">Quero me registrar</Button>
              <Button variant="outlined">G</Button>
              <Button variant="outlined">F</Button>
              <Button variant="outlined">S</Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
