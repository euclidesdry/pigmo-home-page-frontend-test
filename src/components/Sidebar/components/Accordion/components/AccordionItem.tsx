import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { css } from "../../../../../../styled-system/css";
import { styled } from "../../../../../../styled-system/jsx";

export type AccordionItemProps = {
  title: string;
  icon?: string | StaticImport;
};

export default function AccordionItem({ title, icon }: AccordionItemProps) {
  return (
    <div>
      <button
        className={css({
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "2",
          paddingY: "2.5",
          paddingX: "6",
          textAlign: "left",
          backgroundColor: "elevation-2",
          color: "low-contrast",
          border: "none",
          outline: "none",
          cursor: "pointer",
          transition: "all 0.3s",

          "&:before": {
            content: '""',
            width: "20%",
            height: "90%",
            display: "block",
            position: "absolute",
            backgroundColor: "elevation-4",
            rounded: "lg",
            opacity: "0",
            left: "5%",
            top: "5%",
            zIndex: "0",
            transition: "width 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)",
          },

          "&:hover": {
            backgroundColor: "elevation-2",
            color: "high-contrast",
            "&:before": {
              width: "90%",
              opacity: "1",
            },
            "& > img": {
              filter:
                "invert(13%) sepia(99%) saturate(6990%) hue-rotate(319deg) brightness(93%) contrast(101%)",
            },
          },
        })}
      >
        {icon && <Image src={icon} alt={title} />}
        <styled.span zIndex={4}>{title}</styled.span>
      </button>
    </div>
  );
}
