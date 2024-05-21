import { PropsWithChildren } from "react";

import { css } from "../../../styled-system/css";
import { Box, Flex, styled } from "../../../styled-system/jsx";

import PriceChange from "../PriceChange";
import Image from "next/image";

type CryptoCardProps = PropsWithChildren<{}>;

export default function CryptoCard({ children }: CryptoCardProps) {
  return (
    <Flex
      direction="column"
      gap="3"
      className={css({
        width: "178px",
        maxW: "178px",
        rounded: "lg",
        border: "1px solid token(colors.elevation-3)",
        cursor: "pointer",
        padding: "3",

        transition: "all 0.3s ease",

        backgroundImage:
          "linear-gradient(128.58deg, rgba(0, 0, 0, 0) 63.84%, rgba(204, 149, 215, 0.15)96.69%)",

        _hover: {
          backgroundColor: "token(colors.elevation-2)",
          boxShadow: "0px 10px 12px -6px rgba(255, 0, 184, 0.16)",
          backgroundImage:
            "linear-gradient(128.58deg, rgba(0, 0, 0, 0) 63.84%, rgba(255, 0, 184, 0.2) 96.69%)",
        },
      })}
    >
      {children}
    </Flex>
  );
}

CryptoCard.CoinInfo = function CriptoCardCoinInfo({
  variant = "btc",
  priceType = "up",
  children,
}: PropsWithChildren<{
  variant?: "btc" | "eth" | "sol" | "doge" | "shib" | "bonk";
  priceType?: "up" | "down";
}>) {
  return (
    <Flex w="full" alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" gap="3">
        <Image
          src={`/assets/icons/crypto/${variant}.svg`}
          alt={`Icon of ${variant}`}
          width={30}
          height={30}
        />
        <styled.strong textTransform="uppercase">{variant}</styled.strong>
      </Flex>
      <PriceChange type={priceType}>{children}</PriceChange>
    </Flex>
  );
};

CryptoCard.Price = function CryptoCardPrice({
  children,
}: PropsWithChildren<{}>) {
  return (
    <Box w="full" py="2" borderY="1px solid token(colors.elevation-3)">
      <span className={css({ fontWeight: "bold", fontSize: "xl" })}>
        {children}
      </span>
    </Box>
  );
};

type AdditionalInfoProps = {
  data: Array<{
    name: string;
    value: string;
  }>;
};

CryptoCard.AdditionalInfo = function CryptoCardAdditionalInfo({
  data,
}: AdditionalInfoProps) {
  return (
    <Flex direction="column" gap="2">
      {data.map(({ name, value }) => (
        <Flex
          key={name}
          className={css({ justifyContent: "space-between", fontSize: "sm" })}
        >
          <styled.span color="low-contrast" textTransform="uppercase">
            {name}
          </styled.span>
          <styled.span>{value}</styled.span>
        </Flex>
      ))}
    </Flex>
  );
};
