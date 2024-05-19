import Image from "next/image";

import PriceChange from "~/components/PriceChange";
import { styled } from "../../../../styled-system/jsx";
import { css } from "../../../../styled-system/css";

import pigmoLogo from "../../../assets/icons/logo.svg";

export default function LogoStats() {
  return (
    <div className={css({ display: "flex", justifyContent: "space-between" })}>
      <Image src={pigmoLogo} alt="Pigmo Logo" />

      <styled.span
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <styled.p fontSize="sm" fontWeight="bold">
          Pigmo Coin
        </styled.p>
        <styled.p fontSize="sm">$0.0000</styled.p>
      </styled.span>

      <styled.span display="flex" alignItems="end" justifyContent="flex-start">
        <PriceChange type="up">2.13%</PriceChange>
      </styled.span>
    </div>
  );
}
