import Image, { ImageProps } from "next/image";
import { PropsWithChildren } from "react";
import { Box, Flex, FlexProps, styled } from "../../../styled-system/jsx";
import { ScrollButton } from "../CriptoCoinsSection/styles";

type ActionBarProps = PropsWithChildren<{}>;

export default function ActionBar({ children }: ActionBarProps) {
  return <Flex alignItems="center">{children}</Flex>;
}

ActionBar.Icon = function ActionBarIcon({
  src,
  children,
  alt = "ActionBar Icon",
  width = 20,
  height = 20,
  ...props
}: PropsWithChildren<ImageProps & {}>) {
  return (
    <Box me="1">
      {src ? (
        <Image src={src} alt={alt} width={width} height={height} {...props} />
      ) : (
        children
      )}
    </Box>
  );
};

ActionBar.Title = function ActionBarTitle({ children }: PropsWithChildren<{}>) {
  return (
    <styled.h6
      fontWeight="bold"
      fontSize="h6"
      textTransform="uppercase"
      me="2.5"
    >
      {children}
    </styled.h6>
  );
};

type ActionBarScrollButtonsProps = FlexProps & {
  onScrollPrev?: () => void;
  onScrollNext?: () => void;
};

ActionBar.ScrollButtons = function ActionBarScrollButtons({
  onScrollPrev,
  onScrollNext,
  ...props
}: ActionBarScrollButtonsProps) {
  return (
    <Flex {...props}>
      <ScrollButton onClick={onScrollPrev}>
        <Image
          src="/assets/icons/arrow-left.svg"
          alt="Previous Icon"
          width={20}
          height={20}
        />
      </ScrollButton>

      <ScrollButton onClick={onScrollNext}>
        <Image
          src="/assets/icons/arrow-right.svg"
          alt="Next Icon"
          width={20}
          height={20}
        />
      </ScrollButton>
    </Flex>
  );
};
