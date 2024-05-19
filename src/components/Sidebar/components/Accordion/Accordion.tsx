"use client";

import { useState } from "react";
import { css } from "../../../../../styled-system/css";

import AccordionSection, {
  AccordionSectionProps,
} from "./components/AccordionSection";

export const accordionStyle = css({
  width: "100%",
});

interface AccordionProps {
  sections: Pick<AccordionSectionProps, "sectionTitle" | "items">[];
}

export default function Accordion({ sections }: AccordionProps) {
  const [opened, setOpened] = useState(sections[0].sectionTitle);

  return (
    <div className={accordionStyle}>
      {sections.map((section, index) => (
        <AccordionSection
          key={index}
          {...section}
          openedSection={opened}
          setOpenedSection={setOpened}
        />
      ))}
    </div>
  );
}
