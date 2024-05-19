import React from "react";

import { Checkbox as CheckboxBase, ICheckboxGroupProps } from "native-base";
import { FlatList } from "react-native";

interface ICheckboxBaseProps extends ICheckboxGroupProps {
  items: ICheckboxItem[];
  name?: string;
}

interface ICheckboxItem {
  value: string;
  label?: string;
}

function CheckboxGroups(props: ICheckboxBaseProps) {
  const { items, name } = props;
  const [groupValues, setGroupValues] = React.useState([]);
  return (
    <CheckboxBase.Group
      {...props}
      onChange={setGroupValues}
      value={groupValues}
      flex={1}
    >
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <CheckboxBase key={index} value={item.value}>
            {item?.label}
          </CheckboxBase>
        )}
        contentContainerStyle={{
          justifyContent: "space-evenly",
          flex: 1,
        }}
        keyExtractor={(item, index) => `CHECKBOX_GROUP_${name}--${index}`}
      />
    </CheckboxBase.Group>
  );
}

export default CheckboxGroups;
