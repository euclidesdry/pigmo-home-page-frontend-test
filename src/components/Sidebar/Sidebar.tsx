import { css } from "../../../styled-system/css";
import { styled } from "../../../styled-system/jsx";

import Accordion from "./components/Accordion";
import TopBar from "./components/TopBar";

const sections = [
  {
    sectionTitle: "CASSINO",
    items: [
      { title: "Item 1", content: "Content for CASSINO item 1" },
      { title: "Item 2", content: "Content for CASSINO item 2" },
      { title: "Item 3", content: "Content for CASSINO item 3" },
    ],
  },
  {
    sectionTitle: "TRADE",
    items: [
      { title: "Item 1", content: "Content for TRADE item 1" },
      { title: "Item 2", content: "Content for TRADE item 2" },
      { title: "Item 3", content: "Content for TRADE item 3" },
    ],
  },
  {
    sectionTitle: "SPORTS",
    items: [
      { title: "Item 1", content: "Content for SPORTS item 1" },
      { title: "Item 2", content: "Content for SPORTS item 2" },
    ],
  },
];

export default function Sidebar() {
  return (
    <styled.aside
      minW="240px"
      className={css({
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid",
        borderRightColor: "elevation-3",
      })}
    >
      <TopBar />
      <Accordion sections={sections} />
    </styled.aside>
  );
}
