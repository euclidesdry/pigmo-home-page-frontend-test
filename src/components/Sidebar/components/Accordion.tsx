"use client";

import { useState } from "react";
import { css } from "../../../../styled-system/css";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={itemStyle}>
      <button onClick={toggleOpen} className={buttonStyle}>
        {title}
      </button>
      {isOpen && <div className={contentStyle}>{content}</div>}
    </div>
  );
};

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

const Accordion: React.FC<AccordionProps> = ({ sections }) => {
  return (
    <div className={accordionStyle}>
      {sections.map((section, index) => (
        <AccordionSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Accordion;

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
  padding: "1rem",
  textAlign: "left",
  backgroundColor: "#ddd",
  border: "none",
  outline: "none",
  cursor: "pointer",
  fontSize: "1.5rem",
  transition: "background-color 0.3s",

  "&:hover": {
    backgroundColor: "#ccc",
  },
});

const itemStyle = css({
  borderBottom: "1px solid #eaeaea",
});

const buttonStyle = css({
  width: "100%",
  padding: "1rem",
  textAlign: "left",
  backgroundColor: "#f9f9f9",
  border: "none",
  outline: "none",
  cursor: "pointer",
  fontSize: "1.25rem",
  transition: "background-color 0.3s",

  "&:hover": {
    backgroundColor: "#eaeaea",
  },
});

const contentStyle = css({
  padding: "1rem",
  backgroundColor: "#fff",
});
