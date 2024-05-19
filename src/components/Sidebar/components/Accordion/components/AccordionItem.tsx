import { css } from "../../../../../../styled-system/css";

export type AccordionItemProps = {
  title: string;
  icon: React.ReactNode;
};

export default function AccordionItem({ title, icon }: AccordionItemProps) {
  return (
    <div>
      <button
        className={css({
          width: "100%",
          paddingY: "2.5",
          paddingX: "6",
          textAlign: "left",
          backgroundColor: "elevation-2",
          color: "low-contrast",
          border: "none",
          outline: "none",
          cursor: "pointer",
          transition: "background-color 0.3s",

          "&:hover": {
            backgroundColor: "elevation-2",
            color: "high-contrast",
          },
        })}
      >
        {icon && <span>{icon}</span>}
        <span>{title}</span>
      </button>
    </div>
  );
}
