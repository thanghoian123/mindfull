import Checkbox from "@/components/molecules/Checkbox";
import CheckboxGroups from "@/components/molecules/CheckboxGroups";
import { Box, HStack, Text } from "native-base";

import React, { memo, useCallback, useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
interface IDATA {
  id: string | number;
  question: string;
  answer: boolean[];
}

const ListQuestion = memo((props: any) => {
  const { data,handleCheckboxChange } = props;

  const renderItem: ListRenderItem<IDATA> = useCallback(
    ({ item }) => (
      <Box>
        <HStack alignItems={"center"}>
          <HStack w="1/3">
            <Text fontSize={"10"}>{item.question}</Text>
          </HStack>
          <HStack w="2/3" justifyContent={"space-evenly"}>
            <FlatList
              data={item.answer}
              horizontal
              renderItem={({ item: answerItem, index }) => (
                <Checkbox
                //   accessibilityLabel={`StressAndMoodTrackingCheckBox__${item.id}-${index}`}
                  value={answerItem + ""}
                  onChange={(isSelected) => {
                    // console.log(
                    //   "🚀 ~ StressAndMoodTrackingScreen ~ isSelected:",
                    //   isSelected
                    // );
                    handleCheckboxChange(isSelected, item.id, index);
                  }}
                />
              )}
              contentContainerStyle={{
                justifyContent: "space-evenly",
                flex: 1,
              }}
              refreshing
              keyExtractor={(_, index) => `STRESS_VALUE-${index}`}
            />
          </HStack>
        </HStack>
      </Box>
    ),
    [data]
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      refreshing
      keyExtractor={(item) => item.id as string}
    />
  );
});

export default ListQuestion;
