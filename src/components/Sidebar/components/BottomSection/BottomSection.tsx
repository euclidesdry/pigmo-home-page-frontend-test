import { css } from "../../../../../styled-system/css";
import { styled } from "../../../../../styled-system/jsx";

import { Language } from "./components/Language";
import { Support } from "./components/Support";

export default function BottomSection() {
  return (
    <styled.div
      className={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexGrow: 1,
        px: "6",
        pt: "20",
        pb: "16",
        backgroundImage: "url(/assets/images/bg/sidebar-bottom-gradient.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center -300px",
      })}
    >
      <Support />
      <Language />
    </styled.div>
  );
}
