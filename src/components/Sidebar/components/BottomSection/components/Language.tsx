import Image from "next/image";
import { styled } from "../../../../../../styled-system/jsx";

import brazilianFlag from "~/assets/icons/brazilian-flag.svg";

export function Language() {
  return (
    <styled.div
      py="3.5"
      fontSize="sm"
      display="flex"
      justifyContent="space-between"
    >
      <strong>Idioma</strong>
      <Image src={brazilianFlag} alt="Brazilian Flag" />
    </styled.div>
  );
}
