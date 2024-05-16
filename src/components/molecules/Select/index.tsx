import React from "react";
import {
  CheckIcon,
  FormControl,
  ISelectProps,
  ISelectItemProps,
  Select as SelectBase,
  WarningOutlineIcon,
  FlatList,
} from "native-base";
import { ListRenderItem } from "react-native";

interface ISelectBaseProps extends ISelectProps {
  label?: string;
  items: ISelectItemProps[];
  error?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
}

function Select(props: ISelectBaseProps) {
  const { isRequired = false, isInvalid = false } = props;

  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired}>
      {props?.label && <FormControl.Label>{props?.label}</FormControl.Label>}
      <SelectBase
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        minWidth="200"
        color="primary.500"
        _selectedItem={{
          bg: "primary.300",
          endIcon: <CheckIcon size={5} />,
          color: "primary.500",
        }}
        bg={"primary.300"}
        placeholderTextColor="primary.500"
        fontWeight="bold"
        borderWidth={0}
        mt="1"
      >
        {(props.items || []).map((item, index) => (
          <SelectBase.Item
            label={item.label}
            value={item.value}
            key={`ITEM-KEY_${index}`}
          />
        ))}
      </SelectBase>
      {props?.error && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {props?.error}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
}

export default Select;
