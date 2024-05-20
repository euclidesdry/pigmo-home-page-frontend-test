"use client";
import { css } from "../../../styled-system/css";
import { Box, Container, Flex, styled } from "../../../styled-system/jsx";

import { bannersData, links } from "./constants";

import { Banners } from "./components/Banners";
import { CopyRights } from "./components/CopyRights";
import { List } from "./components/List";

export default function Footer() {
  return (
    <styled.footer borderTop="1px solid token(colors.elevation-3)" pt="9">
      <Container maxWidth="7xl" pb="8">
        <Box mb="12">
          <Flex justify="space-between" align="center" gap="12">
            <Box>
              <styled.div
                className={css({
                  minW: "638px",
                  h: "34px",
                  bgImage: `url("/assets/images/bg/logo-footer.svg")`,
                  bgRepeat: "no-repeat",
                  bgPosition: "-24px center",
                  bgSize: "cover",
                })}
              />
            </Box>

            <Flex flex="1" justify="space-between">
              {links.map(({ title, list }, key) => (
                <Box key={key}>
                  <styled.h4 textTransform="uppercase" fontWeight="bold" mb="4">
                    {title}
                  </styled.h4>
                  <Flex flexWrap="wrap" gap="8" justify="space-between">
                    {typeof list[0] === "object" ? (
                      list.map((item, key) => (
                        <List key={key} data={item as unknown as string[]} />
                      ))
                    ) : (
                      <List data={list as unknown as string[]} />
                    )}
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>

        <Banners>
          {bannersData.map(({ name, icon, text }, key) => (
            <Banners.Banner key={key} variant={name}>
              <Banners.Icon src={icon} />
              <Banners.Text>{text}</Banners.Text>
            </Banners.Banner>
          ))}
        </Banners>
      </Container>

      <CopyRights />
    </styled.footer>
  );
}
