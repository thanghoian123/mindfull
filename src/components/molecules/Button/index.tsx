import { Button as ButtonBase, IButtonProps, Text } from "native-base";
import React from "react";

interface IButtonBaseProps extends IButtonProps {
  text: string;
}

function Button(props: IButtonBaseProps) {
  const { text, onPress, _text } = props;
  return (
    <ButtonBase onPress={onPress} {...props} bg='primary.500'>
      <Text color="white" fontWeight={'bold'} {..._text}>{text}</Text>
    </ButtonBase>
  );
}

export default Button;
