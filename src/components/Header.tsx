import Image from "next/image";

import { css } from "../../styled-system/css";
import { Box, Flex } from "../../styled-system/jsx";

import Button from "./Button";

import hamburgerMenuBackIcon from "~/assets/icons/hamburger-menu-back.svg";
import pigmoLogo from "~/assets/image/logo-header.svg";

export default function Header() {
  return (
    <Box
      px="8"
      py="4"
      maxH="72px"
      h="72px"
      className={css({
        borderBottom: "1px solid",
        borderColor: "elevation-3",
      })}
    >
      <Flex justify="space-between" align="center">
        <Box>
          <Flex align="center" gap="3">
            <Image src={hamburgerMenuBackIcon} alt="Pigmo Text Logo" />
            <Image src={pigmoLogo} alt="Pigmo Text Logo" />
          </Flex>
        </Box>
        <Box>
          <Flex align="center" gap="3">
            <Button>Login</Button>
            <Button variant="filled">Register</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
