// components/HeroSection.tsx
import React from "react";
import { Box, Flex, styled } from "../../styled-system/jsx";
import Button from "./Button";

export default function HeroSection() {
  return (
    <Box bg="pink" p="8">
      <styled.p fontSize="xl">Boas vindas ao Pigmo!</styled.p>
      <Button variant="filled">Quero me registrar</Button>
    </Box>
  );
}
