import React from "react";
import { Badge as BadgeBase, Box, ITextProps, IBadgeProps } from "native-base";

interface IBadgeBaseProps extends IBadgeProps {
  text: string;
}

function Badge(props: IBadgeBaseProps) {
  const { text, _text } = props;
  return (
    <Box alignItems="center" color={"white"}>
      <BadgeBase
        bg={"primary.300"}
        _text={{ ..._text, color: "primary.500" }}
        rounded={4}
      >
        {text}
      </BadgeBase>
    </Box>
  );
}

export default Badge;
