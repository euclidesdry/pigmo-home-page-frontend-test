import Image from "next/image";
import { css } from "../../../../styled-system/css";
import { Box, Flex, styled } from "../../../../styled-system/jsx";

export function CopyRights() {
  return (
    <Box
      className={css({ px: "10", py: "6" })}
      borderTop="1px solid token(colors.elevation-3)"
      backgroundImage="token(gradients.footer)"
    >
      <Flex justify="space-between">
        <styled.p color="low-contrast">
          <styled.strong color="white">&copy;2024 Pigmo</styled.strong> - All
          rights reserved. Pigmo is licensed and authorized, operating under the
          Game Service Provider Master License.
        </styled.p>
        <Flex gap="4">
          <Image
            src="/assets/icons/mail.svg"
            alt="Mail Icon"
            width={18}
            height={14}
          />
          <styled.span color="low-contrast" textTransform="uppercase">
            contact us
          </styled.span>
        </Flex>
      </Flex>
    </Box>
  );
}
