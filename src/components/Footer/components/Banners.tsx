"use client";
import { PropsWithChildren } from "react";
import {
  HTMLStyledProps,
  StyledVariantProps,
} from "../../../../styled-system/types";
import { Box, Flex, styled } from "../../../../styled-system/jsx";
import { useMouseCenteredPosition } from "~/hooks/useMouseCenteredPosition";
import { token } from "../../../../styled-system/tokens";

const backgroundColorSet = {
  discord: [token("colors.discord-1"), token("colors.discord-2")],
  telegram: [token("colors.telegram-1"), token("colors.telegram-2")],
  x: [token("colors.x-1"), token("colors.x-2")],
};

type BannersDefaultProps = PropsWithChildren & {};

export function Banners({ children }: BannersDefaultProps) {
  return <Flex gap="6">{children}</Flex>;
}

const BannerStyle = styled(Flex, {
  base: {
    backgroundColor: "elevation-2",
    alignItems: "center",
    transition: "all 0.3s ease",
    userSelect: "none",
    gap: "6",
    px: "6",
    py: "5",
    rounded: "lg",
    border: "1px solid token(colors.elevation-3)",
    backgroundImage:
      "radial-gradient(circle at 50% 50%, transparent, rgba(255, 255, 255, 0.1))",

    _hover: {
      cursor: "pointer",
      transform: "scale(1.02)",
    },
    _active: { transform: "scale(.94)" },
  },
  variants: {
    variant: {
      discord: {
        img: {
          filter: "drop-shadow(-12px -8px 48px rgb(255 255 255))",
        },
      },
      telegram: {},
      x: {},
    },
  },
});

type BannerProps = BannersDefaultProps & {
  variant?: StyledVariantProps<typeof BannerStyle>["variant"];
};

Banners.Banner = function BannersBanner({ variant, children }: BannerProps) {
  const { ref, position, handleMouseMove } = useMouseCenteredPosition();
  const [color1, color2] = variant
    ? backgroundColorSet[variant]
    : ["transparent", "rgba(255, 255, 255, 0.1)"];

  return (
    <BannerStyle
      ref={ref}
      variant={variant}
      style={{
        backgroundImage: `radial-gradient(circle at ${position.x}% ${position.y}% , ${color1}, ${color2})`,
      }}
      onMouseMove={handleMouseMove}
    >
      {children}
    </BannerStyle>
  );
};

type IconProps = HTMLStyledProps<"img"> & {};

Banners.Icon = function BannersIcon({ ...props }: IconProps) {
  return (
    <Box>
      <styled.img {...props} />
    </Box>
  );
};

type TextProps = HTMLStyledProps<"p"> & {
  children: string | TrustedHTML;
};

Banners.Text = function BannersTitle({ children }: TextProps) {
  return <styled.p dangerouslySetInnerHTML={{ __html: children }} />;
};
