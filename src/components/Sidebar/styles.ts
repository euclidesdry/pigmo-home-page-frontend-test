import { styled } from "../../../styled-system/jsx";

export const SidebarWrapper = styled("aside", {
  base: {
    display: "flex",
    position: "relative",
    minWidth: "240px",
    maxWidth: "240px",
    maxHeight: "100%",
    minH: "100vh",
    overflow: "hidden",
    flexDirection: "column",
    borderRight: "1px solid",
    borderRightColor: "elevation-3",
  },
});

export const TopBackground = styled("div", {
  base: {
    backgroundImage: "url(/assets/images/bg/sidebar-top-gradient.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "cover",
  },
});
