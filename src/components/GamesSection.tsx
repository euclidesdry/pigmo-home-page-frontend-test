// components/GamesSection.tsx
import React from "react";
import { Box, Flex } from "../../styled-system/jsx";

export default function GamesSection() {
  return (
    <Box p="8">
      <Flex wrap="wrap" gap="4">
        <Box bg="gray" p="4">
          Originals
        </Box>
        <Box bg="gray" p="4">
          Slots
        </Box>
        <Box bg="gray" p="4">
          Game Shows
        </Box>
        <Box bg="gray" p="4">
          Live Casino
        </Box>
        <Box bg="gray" p="4">
          Table Games
        </Box>
        <Box bg="gray" p="4">
          Blackjack
        </Box>
        <Box bg="gray" p="4">
          Roulette
        </Box>
      </Flex>
    </Box>
  );
}
