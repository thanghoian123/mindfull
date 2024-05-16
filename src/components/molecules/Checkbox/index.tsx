import React from "react";

import { Checkbox as CheckboxBase, ICheckboxProps } from "native-base";

interface ICheckboxBaseProps extends ICheckboxProps {}

function Checkbox(props: ICheckboxBaseProps) {
  return <CheckboxBase {...props} />;
}

export default Checkbox;
