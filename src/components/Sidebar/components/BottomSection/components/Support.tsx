import Image from "next/image";

import { css } from "../../../../../../styled-system/css";
import { styled } from "../../../../../../styled-system/jsx";

import cuboIcon from "~/assets/image/cubo.png";

export function Support() {
  return (
    <div
      className={css({
        position: "relative",
        border: "2px solid",
        borderColor: "primary",
        rounded: "xl",
        px: "6",
        pe: "5",
        py: "4",

        transform: "scale(1)",
        transition: "all 0.3s",
        userSelect: "none",

        bgGradient: "to-r",
        gradientFrom: "transparent",
        gradientTo: "primary/30",

        _hover: {
          transform: "scale(1.05)",
          cursor: "pointer",
        },
        _active: {
          transform: "scale(.95)",
        },
      })}
    >
      <styled.div pe="4" display="flex" gap="2" flexDirection="column">
        <styled.strong fontSize="sm">Fale conosco</styled.strong>
        <styled.p fontSize="sm" lineHeight="14px" color="low-contrast">
          Se precisar de ajuda nós estamos aqui
        </styled.p>
      </styled.div>

      <Image
        src={cuboIcon}
        alt="Phone Icon"
        className={css({
          width: "60px",
          position: "absolute",
          top: "0",
          right: "-25px",
          rotate: "-45deg",
        })}
      />
    </div>
  );
}
