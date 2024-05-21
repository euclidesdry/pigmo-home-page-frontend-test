import { styled } from "../../../styled-system/jsx";

export const ScrollButton = styled("button", {
  base: {
    transition: "all 0.3s ease",

    _hover: {
      filter: "drop-shadow(1px 2px 6px token(colors.primary))",
      transform: "scale(1.5)",
      cursor: "pointer",
    },
    _active: {
      filter: "drop-shadow(0px 0px 0px transparent)",
      transform: "scale(.8)",
    },
  },
});

export const Volume = styled("span", {
  base: {
    color: "low-contrast",
    fontSize: "xs",
    textTransform: "uppercase",
    marginRight: "1",
  },
});

export const Tooltip = styled("span", {
  base: {
    fontWeight: "bold",
    bgGradient: "to-r",
    gradientFrom: "primary",
    gradientTo: "secondary",
    border: "1px solid token(colors.secondary)",
    fontSize: "sm",
    rounded: "lg",
    textTransform: "uppercase",
    paddingX: "2",
    marginX: "2.5",
  },
});
