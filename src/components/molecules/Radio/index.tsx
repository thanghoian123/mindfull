import {
  Radio as RadioBase,
  IRadioProps,
  IRadioGroupProps,
  FormControl,
  WarningOutlineIcon,
  Stack,
  Text,
} from "native-base";
import React from "react";

interface IRadioGroupBaseProps extends IRadioGroupProps {
  items: ICustomRadioItem[];
  isInvalid?: boolean;
  label?: string;
  error?: string;
  isHorizontal?: boolean;
}

interface ICustomRadioItem extends IRadioProps {
  label: string;
}

function RadioGroup(props: IRadioGroupBaseProps) {
  const {
    items,
    isInvalid,
    label = "",
    error = "",
    isHorizontal = false,
  } = props;
  return (
    <FormControl isInvalid={isInvalid}>
      {label && (
        <FormControl.Label
          _text={{
            fontSize: "lg",
            bold: true,
          }}
        >
          {label}
        </FormControl.Label>
      )}
      <RadioBase.Group {...props}>
        <Stack
          direction={{
            base: isHorizontal ? "row" : "column",
            md: isHorizontal ? "row" : "column",
          }}
          alignItems={{
            base: "flex-start",
            md: "center",
          }}
          space={4}
        >
          {(items || []).map((i, index) => (
            <RadioBase my={1} key={index} {...i}>
              <Text
                color={props.value === i.value ? "primary.500" : "dark.800"}
              >
                {i.label}
              </Text>
            </RadioBase>
          ))}
        </Stack>
      </RadioBase.Group>
      {error && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {error}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
}

export default RadioGroup;
