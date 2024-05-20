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
    paddingY: "3",

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
        backgroundImage:
          "radial-gradient(52.11% 100% at 52.11% 0%, token(colors.secondary) 0%, token(colors.primary) 100%)",
        borderColor: "secondary",
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        _active: {
          boxShadow:
            "rgba(0, 0, 0, 0) 0px 2px 4px, rgba(0, 0, 0, 0) 0px 7px 13px -3px, rgba(0, 0, 0, 0) 0px -3px 0px inset",
        },
      },
      outlined: {
        bg: "transparent",
        border: "1px solid",
        borderColor: "indigo.500",
        color: "indigo.500",
      },
    },
  },
});
