import {
  Box,
  FormControl,
  IInputProps,
  Input as InputBase,
  WarningOutlineIcon,
} from "native-base";
import React from "react";

interface IInputBaseProps extends IInputProps {
  label?: string;
  error?: string;
  isInvalid?:boolean
}

function Input(props: IInputBaseProps) {
  const { label = "", error = "" , isInvalid= false} = props;
  return (
    <Box>
      <FormControl isInvalid={isInvalid}>
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <InputBase
          borderWidth={0}
          placeholderTextColor="primary.500"
          bg="primary.300"
          color="primary.500"
          {...props}
        />
        {error && (
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {error}
          </FormControl.ErrorMessage>
        )}
      </FormControl>
    </Box>
  );
}

export default Input;
