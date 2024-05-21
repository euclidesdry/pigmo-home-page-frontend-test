import { Box, Container, Flex, styled } from "../../../styled-system/jsx";

import ActionBar from "../ActionBar";
import { CryptoCard } from "../CryptoCard";
import { cryptoCoins } from "./constants";

import { Tooltip, Volume } from "./styles";

type CryptoCoinsSectionProps = {};

export default function CryptoCoinsSection({}: CryptoCoinsSectionProps) {
  return (
    <Box>
      <ActionBar>
        <ActionBar.Icon src="/assets/icons/spades.svg" alt="CriptoCoin Icon" />
        <ActionBar.Title>CriptoMoedas</ActionBar.Title>

        <Flex alignItems="center" ml="10">
          <Volume>
            Total 24H Volume: <styled.span color="success">$2.27B</styled.span>
          </Volume>
          <Tooltip>Trade</Tooltip>
        </Flex>

        <ActionBar.ScrollButtons />
      </ActionBar>

      <Flex mt="4" gap="4">
        {cryptoCoins.map(({ variant, type, price, percentage }, index) => (
          <CryptoCard key={index}>
            <CryptoCard.CoinInfo variant={variant} priceType={type}>
              {percentage}%
            </CryptoCard.CoinInfo>
            <CryptoCard.Price>${price}</CryptoCard.Price>
            <CryptoCard.AdditionalInfo
              data={[
                { name: "24H Vol", value: "$757M" },
                { name: "Leverage", value: "1000x" },
              ]}
            />
          </CryptoCard>
        ))}
      </Flex>
    </Box>
  );
}
