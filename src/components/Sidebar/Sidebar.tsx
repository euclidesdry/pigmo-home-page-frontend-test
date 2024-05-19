import Accordion from "./components/Accordion";
import Logged from "./components/Logged";
import TopBar from "./components/TopBar";

import { items, sections } from "./constants";

import { SidebarWrapper, TopBackground } from "./styles";

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <TopBackground>
        <TopBar />
        <Logged items={items} />
      </TopBackground>
      <Accordion sections={sections} />
    </SidebarWrapper>
  );
}
