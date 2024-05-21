import { PropsWithChildren } from "react";
import { css, cva } from "../../../styled-system/css";
import { styled } from "../../../styled-system/jsx";

import { Up } from "./components/icons/Up";
import { Down } from "./components/icons/Down";

const priceChangeStyles = cva({
  base: {
    width: "fit-content",
    display: "flex",
    fontSize: "xs",
    border: "1px solid",
    paddingX: "1",
    rounded: "sm",
    shadow: "xs",
  },
  variants: {
    type: {
      up: { color: "success", fill: "success" },
      down: { color: "error", fill: "error" },
    },
  },
  defaultVariants: {
    type: "up",
  },
});

type PriceChange = PropsWithChildren & {
  type?: "up" | "down";
};

export default function PriceChange({ children, type = "up" }: PriceChange) {
  return (
    <styled.span className={priceChangeStyles({ type })}>
      {type === "up" ? <Up pe="1" /> : <Down pe="1" />}
      {children}
    </styled.span>
  );
}
