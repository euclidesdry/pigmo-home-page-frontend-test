import { Box } from "../../../styled-system/jsx";

import ActionBar from "../ActionBar";

interface CasinoSectionProps {}

export default function CasinoSection({}: CasinoSectionProps) {
  return (
    <Box>
      <ActionBar>
        <ActionBar.Icon src="/assets/icons/casino.svg" alt="CriptoCoin Icon" />
        <ActionBar.Title>Cassino</ActionBar.Title>
        <ActionBar.ScrollButtons />
      </ActionBar>
    </Box>
  );
}
