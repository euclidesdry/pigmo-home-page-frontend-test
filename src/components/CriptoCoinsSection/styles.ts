import { styled } from "../../../styled-system/jsx";

export const ScrollButton = styled("button", {
  base: {
    transition: "all 0.3s ease",

    _hover: {
      filter: "drop-shadow(1px 2px 6px var(--colors-primary))",
      transform: "scale(1.5)",
      cursor: "pointer",
    },
    _active: {
      filter: "drop-shadow(0 0 0 transparent",
      transform: "scale(.8)",
    },
  },
});
