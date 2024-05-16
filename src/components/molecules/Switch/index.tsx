import { HStack, ISwitchProps, Switch as SwitchBase, Text } from "native-base";
import React from "react";

interface ISwitchBaseProps extends ISwitchProps {
  label?: string;
}

function Switch(props: ISwitchBaseProps) {
  const { label = "" } = props;
  return (
    <HStack alignItems="center" space={4}>
      {label && <Text>{label}</Text>}
      <SwitchBase size="sm" onTrackColor="primary.500" {...props} />
    </HStack>
  );
}

export default Switch;
