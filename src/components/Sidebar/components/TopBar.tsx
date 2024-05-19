"use client";
import { styled } from "../../../../styled-system/jsx";

import { Cup } from "~/components/icons/Cup";
import { Spades } from "~/components/icons/Spades";
import { TradeGraph } from "~/components/icons/TradeGraph";

import Switch, { SwitchProps } from "./Switch";
import LogoStats from "./LogoStats";

const options = [
  {
    name: "CASSINO",
    icon: <Spades />,
  },
  {
    name: "AWARDS",
    icon: <Cup />,
  },
  {
    name: "TRADERS",
    icon: <TradeGraph />,
  },
] satisfies SwitchProps["options"];

export default function TopBar() {
  return (
    <styled.div w="100%" py="4" px="6">
      <Switch options={options} />
      <LogoStats />
    </styled.div>
  );
}
