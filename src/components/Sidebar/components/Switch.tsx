import { useState } from "react";
import { css } from "../../../../styled-system/css";
import { styled } from "../../../../styled-system/jsx";

const switchContainer = css({
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
});

const switchButton = css({
  padding: "0.5rem 1rem",
  cursor: "pointer",
  transition: "background-color 0.3s",
  "&:not(:last-child)": {
    borderRight: "none",
  },
  "&:hover": {
    color: "secondary",
  },
});

const active = css({
  backgroundColor: "rgba(0, 0, 0, 0)",
  fontWeight: "bold",
});

interface SwitchProps {
  options: string[];
}

export default function Switch({ options }: SwitchProps) {
  const [selected, setSelected] = useState(options[0]);

  const handleClick = (option: string) => {
    setSelected(option);
  };

  return (
    <div className={switchContainer}>
      {options.map((option) => (
        <styled.button
          key={option}
          className={`${switchButton} ${selected === option ? active : ""}`}
          onClick={() => handleClick(option)}
        >
          {option}
        </styled.button>
      ))}
    </div>
  );
}
