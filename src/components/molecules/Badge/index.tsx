import React from "react";
import {
  Badge as BadgeBase,
  Box,
  ITextProps,
  IBadgeProps,
  IBoxProps,
} from "native-base";

interface IBadgeBaseProps extends IBadgeProps {
  text: string;
  _container?: IBoxProps;
}

function Badge(props: IBadgeBaseProps) {
  const { text, _text, _container } = props;
  return (
    <Box alignItems="center" color={"white"} {..._container}>
      <BadgeBase
        bg={"primary.300"}
        _text={{ color: "primary.500", ..._text }}
        rounded={4}
      >
        {text}
      </BadgeBase>
    </Box>
  );
}

export default Badge;
