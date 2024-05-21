import { StaticImport } from "next/dist/shared/lib/get-img-props";

import sportsIcon0 from "~/assets/icons/bg/sports/Vector-0.svg";
import sportsIcon1 from "~/assets/icons/bg/sports/Vector-1.svg";
import sportsIcon2 from "~/assets/icons/bg/sports/Vector-2.svg";
import sportsIcon3 from "~/assets/icons/bg/sports/Vector-3.svg";
import sportsIcon4 from "~/assets/icons/bg/sports/Vector-4.svg";
import sportsIcon5 from "~/assets/icons/bg/sports/Vector-5.svg";

export const sportsData = [
  {
    name: "Tênis de mesa",
    icon: sportsIcon0 as StaticImport,
  },
  {
    name: "Voleibol",
    icon: sportsIcon1 as StaticImport,
  },
  {
    name: "Boxe",
    icon: sportsIcon2 as StaticImport,
  },
  {
    name: "Golfe",
    icon: sportsIcon3 as StaticImport,
  },
  {
    name: "MMA",
    icon: sportsIcon4 as StaticImport,
  },
  {
    name: "Sinuca",
    icon: sportsIcon5 as StaticImport,
  },
] as const;
