import { ReactNode, useState } from "react";
import { css, cva } from "../../../../styled-system/css";
import { styled } from "../../../../styled-system/jsx";

const switchButtonStyles = cva({
  base: {
    minW: "40px",
    minH: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "2",
    cursor: "pointer",
    transitionDuration: "0.3s",
    transitionProperty: "background-color, color",
    borderRadius: "md",
    color: "low-contrast",
    fill: "low-contrast",
    _hover: {
      fill: "secondary",
      color: "secondary",
    },
  },
  variants: {
    type: {
      active: {
        bgGradient: "to-r",
        gradientFrom: "pigmo-primary",
        gradientTo: "secondary",
        color: "high-contrast !important",
        fontWeight: "bold",
        fill: "high-contrast !important",
      },
      inative: { flex: 1 },
    },
  },
  defaultVariants: {
    type: "active",
  },
});

type OptionsProps = {
  name: string;
  icon: ReactNode;
};

export type SwitchProps = {
  options: OptionsProps[];
};

export default function Switch({ options }: SwitchProps) {
  const [selected, setSelected] = useState(options[0].name);

  const handleClick = (option: string) => {
    setSelected(option);
  };

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
        border: "1px solid",
        borderColor: "low-contrast",
        padding: "1",
        rounded: "xl",
        color: "high-contrast",
        fontSize: "sm",
      })}
    >
      {options.map((option) => {
        const isActive = selected === option.name;
        return (
          <styled.button
            key={option.name}
            className={switchButtonStyles({
              type: isActive ? "active" : "inative",
            })}
            onClick={() => handleClick(option.name)}
          >
            <styled.span mr={isActive ? "2" : "0"}>{option.icon}</styled.span>
            {isActive ? option.name : ""}
          </styled.button>
        );
      })}
    </div>
  );
}
