import starIcon from "~/assets/icons/star.svg";
import airdropIcon from "~/assets/icons/airdrop.svg";

import logoIcon from "~/assets/icons/pigmo.svg";
import slotMachineIcon from "~/assets/icons/slot-machine.svg";
import casinoIcon from "~/assets/icons/casino.svg";
import giftIcon from "~/assets/icons/gift.svg";
import tableGamesIcon from "~/assets/icons/table-games.svg";
import rouletteIcon from "~/assets/icons/roulette.svg";
import blackjackIcon from "~/assets/icons/blackjack.svg";

export const items = [
  { name: "$PIG Airdrop", icon: airdropIcon },
  { name: "NFT Staking", icon: starIcon },
];

export const sections = [
  {
    sectionTitle: "CASSINO",
    items: [
      { title: "Originais", icon: logoIcon },
      { title: "Caça-Níqueis", icon: slotMachineIcon },
      { title: "Cassino Ao Vivo", icon: casinoIcon },
      { title: "Lançamentos", icon: giftIcon },
      { title: "Jogos de Mesa", icon: tableGamesIcon },
      { title: "Roleta", icon: rouletteIcon },
      { title: "Blackjack", icon: blackjackIcon },
    ],
  },
  {
    sectionTitle: "TRADE",
    items: [{ title: "Item 1" }, { title: "Item 2" }, { title: "Item 3" }],
  },
  {
    sectionTitle: "SPORTS",
    items: [
      { title: "Tênis de Mesa" },
      { title: "Voleibol" },
      { title: "Boxe" },
      { title: "Golfe" },
      { title: "MMA" },
      { title: "Sinuca" },
    ],
  },
];
