import { Box, Container, styled } from "../../../styled-system/jsx";

import ActionBar from "../ActionBar/ActionBar";

type CriptoCoinsSectionProps = {};

export default function CriptoCoinsSection({}: CriptoCoinsSectionProps) {
  return (
    <Box>
      <ActionBar>
        <ActionBar.Icon src="/assets/icons/spades.svg" alt="CriptoCoin Icon" />
        <ActionBar.Title>CriptoMoedas</ActionBar.Title>
        <ActionBar.ScrollButtons />
      </ActionBar>
    </Box>
  );
}
