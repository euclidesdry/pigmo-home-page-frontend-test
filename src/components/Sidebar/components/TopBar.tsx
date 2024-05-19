"use client";
import { styled } from "../../../../styled-system/jsx";

import Switch from "./Switch";

export default function TopBar() {
  return (
    <styled.div w="100%" py="4" px="6">
      <Switch options={["CASSINO", "AWARDS", "STATISTICS"]} />
    </styled.div>
  );
}
