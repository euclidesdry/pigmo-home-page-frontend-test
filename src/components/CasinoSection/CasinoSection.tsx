import { css } from "../../../styled-system/css";
import { Box, Flex } from "../../../styled-system/jsx";
import { token } from "../../../styled-system/tokens";

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

      <Flex gap="4" mt="4">
        {Array.from({ length: 7 }).map((_, key) => (
          <div
            key={key}
            style={{
              backgroundImage: `url("/assets/images/bg/casino/Images-${key}.svg")`,
            }}
            className={css({
              width: "150px",
              height: "200px",
              rounded: "lg",
              backgroundColor: "elevation-2",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              transition: "all 0.3s ease",
              userSelect: "none",

              _hover: {
                filter: "drop-shadow(1px 1px 16px #ffffff30)",
                transform: "scale(1.05)",
                cursor: "pointer",
              },
              _active: {
                filter: "drop-shadow(0px 0px 0px transparent)",
                transform: "scale(.94)",
              },
            })}
          />
        ))}
      </Flex>
    </Box>
  );
}
