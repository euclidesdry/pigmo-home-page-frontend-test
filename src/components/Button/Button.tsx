import { HTMLStyledProps } from "../../../styled-system/types";

type ButtonProps = HTMLStyledProps<"button"> & {
  variant?: "filled" | "outlined";
};

import { ButtonStyles } from "./styles";

export default function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <ButtonStyles variant={variant} {...props}>
      {children}
    </ButtonStyles>
  );
}
