// components/HeroSection.tsx
import React from "react";
import { Box, Flex, Heading, Button } from "../../styled-system/jsx";

export default function HeroSection() {
  return (
    <Box as="section" bg="pink" p="8">
      <Heading as="h1" size="xl">
        Boas vindas ao Pigmo!
      </Heading>
      <Button>Quero me registrar</Button>
    </Box>
  );
}
