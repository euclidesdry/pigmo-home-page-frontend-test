import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { styled } from "../../../../styled-system/jsx";

type Item = {
  name: string;
  icon: string | StaticImport;
};

type LoggedProps = {
  items: Item[];
};

export default function Logged({ items }: LoggedProps) {
  return (
    <styled.ul py="2.5">
      {items.map((item) => (
        <styled.li
          key={item.name}
          display="flex"
          gap="2"
          py="2"
          px="6"
          _hover={{
            bg: "elevation-2",
            cursor: "pointer",
            "& > span": { color: "high-contrast" },
          }}
        >
          <Image src={item.icon} alt={item.name} />
          <styled.span color="low-contrast">{item.name}</styled.span>
        </styled.li>
      ))}
    </styled.ul>
  );
}
