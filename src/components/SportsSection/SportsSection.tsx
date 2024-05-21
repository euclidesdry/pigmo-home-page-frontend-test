import { Box } from "../../../styled-system/jsx";

import ActionBar from "../ActionBar";

interface SportsProps {}

export default function Sports({}: SportsProps) {
  return (
    <Box>
      <ActionBar>
        <ActionBar.Icon src="/assets/icons/sports.svg" alt="CriptoCoin Icon" />
        <ActionBar.Title>Esportes</ActionBar.Title>
      </ActionBar>
    </Box>
  );
}
