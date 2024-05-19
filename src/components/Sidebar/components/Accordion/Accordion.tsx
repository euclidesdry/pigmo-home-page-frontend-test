"use client";

import { useState } from "react";
import { css } from "../../../../../styled-system/css";
import AccordionItem, { AccordionItemProps } from "./components/AccordionItem";

interface AccordionSectionProps {
  sectionTitle: string;
  items: AccordionItemProps[];
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  sectionTitle,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={sectionStyle}>
      <button onClick={toggleOpen} className={sectionButtonStyle}>
        {sectionTitle}
      </button>
      {isOpen && (
        <div className={accordionStyle}>
          {items.map((item, index) => (
            <AccordionItem key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  sections: AccordionSectionProps[];
}

export default function Accordion({ sections }: AccordionProps) {
  return (
    <div className={accordionStyle}>
      {sections.map((section, index) => (
        <AccordionSection key={index} {...section} />
      ))}
    </div>
  );
}

// Styles
const accordionStyle = css({
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
});

const sectionStyle = css({
  marginBottom: "1rem",
});

const sectionButtonStyle = css({
  width: "100%",
  py: "2",
  px: "6",
  textAlign: "left",
  border: "none",
  outline: "none",
  cursor: "pointer",
  transition: "background-color 0.3s",

  "&:hover": {
    backgroundColor: "elevation-2",
  },
});
