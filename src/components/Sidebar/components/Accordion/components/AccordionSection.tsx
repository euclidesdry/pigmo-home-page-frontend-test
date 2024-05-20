"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

import { css, cva } from "../../../../../../styled-system/css";
import { styled } from "../../../../../../styled-system/jsx";

import { accordionStyle } from "../Accordion";
import AccordionItem, { AccordionItemProps } from "./AccordionItem";

import arrowIcon from "~/assets/icons/arrow.svg";

const sectionStyle = css({});

const ArrowIcon = styled(Image, {
  base: {
    transition: "all 0.3s easy",
  },
  variants: {
    type: {
      active: {
        transform: "rotate(180deg)",
      },
      inative: { transform: "rotate(0deg)" },
    },
  },
  defaultVariants: {
    type: "inative",
  },
});

const sectionButtonStyles = cva({
  base: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    py: "2",
    px: "6",
    textAlign: "left",
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s",
    borderY: "1px solid",
    borderColor: "transparent",

    "&:hover": {
      backgroundColor: "elevation-3",
      color: "high-contrast",
    },
  },
  variants: {
    type: {
      active: {
        color: "primary !important",
        backgroundColor: "elevation-2",
        borderColor: "elevation-3",
        "& > img": {
          filter:
            "invert(17%) sepia(85%) saturate(6389%) hue-rotate(316deg) brightness(89%) contrast(110%)",
        },
      },
      inative: {
        color: "low-contrast",
      },
    },
  },
  defaultVariants: {
    type: "active",
  },
});

export type AccordionSectionProps = {
  sectionTitle: string;
  items: AccordionItemProps[];
  openedSection: string;
  setOpenedSection: Dispatch<SetStateAction<string>>;
};

export default function AccordionSection({
  sectionTitle,
  items,
  openedSection,
  setOpenedSection,
}: AccordionSectionProps) {
  const isOpen = openedSection === sectionTitle;

  const handleOpen = (sectionName: string) =>
    setOpenedSection((currentSection) =>
      currentSection === sectionName ? "" : sectionName
    );

  return (
    <div className={sectionStyle}>
      <styled.button
        onClick={() => handleOpen(sectionTitle)}
        className={sectionButtonStyles({ type: isOpen ? "active" : "inative" })}
      >
        <styled.span fontSize="sm" fontWeight="bold">
          {sectionTitle}
        </styled.span>
        <ArrowIcon
          src={arrowIcon}
          alt={`${sectionTitle} Icon`}
          type={isOpen ? "active" : "inative"}
        />
      </styled.button>
      {isOpen && (
        <div className={accordionStyle}>
          {items.map((item, index) => (
            <AccordionItem key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
