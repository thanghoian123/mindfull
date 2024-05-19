// import React from "react";



// function Checkbox(props: ICheckboxBaseProps) {
//   return <CheckboxBase {...props} />;
// }

// export default Checkbox;

import React, { memo } from 'react';
import { Checkbox as CheckboxBase, ICheckboxProps } from "native-base";
interface ICheckboxBaseProps extends ICheckboxProps {}

const Checkbox = memo((props:ICheckboxBaseProps) => {
  return (
    <CheckboxBase {...props} />
  );
});

export default Checkbox;