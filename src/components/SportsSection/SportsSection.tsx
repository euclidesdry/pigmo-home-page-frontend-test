import Image from "next/image";
import { css } from "../../../styled-system/css";
import { Box, Flex, styled } from "../../../styled-system/jsx";

import ActionBar from "../ActionBar";
import { sportsData } from "./constants";

interface SportsProps {}

export default function Sports({}: SportsProps) {
  return (
    <Box>
      <ActionBar>
        <ActionBar.Icon src="/assets/icons/sports.svg" alt="CriptoCoin Icon" />
        <ActionBar.Title>Esportes</ActionBar.Title>
      </ActionBar>

      <Flex gap="4" mt="4" mb="12">
        {sportsData.map(({ name, icon }, key) => (
          <Flex
            key={key}
            direction="column"
            align="center"
            justify="center"
            className={css({
              position: "relative",
              width: "178px",
              height: "150px",
              rounded: "lg",
              transition: "all 0.3s ease-in-out",
              userSelect: "none",
              cursor: "pointer",
              border: "1px solid token(colors.elevation-3)",
              overflow: "hidden",

              _hover: {
                transform: "scale(1.04)",
                backgroundColor: "token(colors.primary)",
                backgroundImage:
                  "linear-gradient(129.59deg, token(colors.primary) 2.58%, token(colors.secondary) 95.56%)",
                "& > img": {
                  mixBlendMode: "screen",
                  filter:
                    "invert(84%) sepia(100%) saturate(0%) hue-rotate(302deg) brightness(108%) contrast(102%)",
                },
                "& > span": {
                  color: "white",
                },
              },
              _active: { transform: "scale(.94)" },

              "&:before": {
                content: "''",
                position: "absolute",
                width: "64px",
                height: "142px",
                top: "-108px",
                left: "calc(50% - 32px)",
                gap: "0px",
                background: "#ffffff",
                rounded: "50%",
                transform: "scale(.4)",
                boxShadow: "0 86px 160px #ffffff80",
              },
              "&:after": {
                content: "''",
                position: "absolute",
                width: "64px",
                height: "142px",
                top: "128px",
                left: "calc(50% - 32px)",
                gap: "0px",
                background: "token(colors.secondary)",
                rounded: "50%",
                transform: "scale(.4)",
                boxShadow: "0 -86px 160px token(colors.secondary)",
              },
            })}
          >
            <Image src={icon} alt={`Icon ${name}`} style={{ zIndex: 2 }} />
            <styled.span
              fontWeight="bold"
              textTransform="uppercase"
              mt="5"
              color="low-contrast"
              zIndex={2}
            >
              {name}
            </styled.span>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
