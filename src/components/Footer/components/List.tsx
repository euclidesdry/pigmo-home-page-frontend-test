import { css } from "../../../../styled-system/css";
import { styled } from "../../../../styled-system/jsx";

const listStyles = css({
  "& li": {
    paddingY: "1",
    transition: "all 0.2s ease-in-out",

    _hover: {
      color: "primary",
      listStyle: "outside",
      cursor: "pointer",
    },
  },
});

type ListDefaultProps = {
  data: string[];
};

export function List({ data }: ListDefaultProps) {
  return (
    <styled.ul fontSize="sm" color="low-contrast" className={listStyles}>
      {data.map((item, key) => (
        <li key={`${key}-${item}`}>{item}</li>
      ))}
    </styled.ul>
  );
}
