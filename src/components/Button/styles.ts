import { styled } from "../../../styled-system/jsx";

export const ButtonStyles = styled("button", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "1px solid",
    borderColor: "transparent",
    userSelect: "none",
    transition: "all 0.3s ease",
    rounded: "lg",
    padding: "4",
    paddingY: "2",

    fontSize: "sm",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",

    _hover: { opacity: 0.8 },
    _active: { opacity: 0.6, transform: "scale(.98)" },
  },
  variants: {
    variant: {
      filled: {
        background: "primary",
        backgroundImage: "token(gradients.button)",
        borderColor: "secondary",
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        _active: {
          boxShadow: "token(colors.primary/200) 0 3px 7px inset",
        },
      },
      outlined: {
        bg: "transparent",
        border: "1px solid",
        borderColor: "low-contrast",
        color: "low-contrast",
        paddingX: "3",
        minH: "44px",
      },
    },
  },
});
