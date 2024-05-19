import React, { useEffect, useCallback, memo, useState } from "react";
import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { Box, Checkbox, HStack, Text } from "native-base";
import get from "lodash.get";
import Loader from "@/components/atoms/Loader";
import Badge from "@/components/molecules/Badge";
import Button from "@/components/molecules/Button";

interface IDATA {
  id: string | number;
  question: string;
}

interface IAnswer {
  id: number | string;
  ans: string[];
}

interface IMemoizedQuestionItem {
  values: string[];
  item: IDATA;
  handleCheckboxChange: (values: IAnswer) => void;
  index: number;
}

const ANSWER = [
  { label: "None of the time", value: "none_of_the_time" },
  { label: "A little of the time", value: "little_of_the_time" },
  { label: "Some of the time", value: "some_of_the_time" },
  { label: "Most of the time", value: "most_of_the_time" },
  { label: "All of the time", value: "all_of_the_time" },
];

const DATA: IDATA[] = [
  {
    id: "1",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "2",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "3",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "4",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "5",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "6",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "7",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "8",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "9",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "10",
    question: "About how often did you feel tired out for no good reason?",
  },

  {
    id: "11",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "12",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "13",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "14",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "15",
    question: "About how often did you feel tired out for no good reason?",
  },

  {
    id: "16",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "17",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "18",
    question: "About how often did you feel tired out for no good reason?",
  },
  {
    id: "19",
    question: "About how often did you feel tired out for no good reason?",
  },
];

const StressAndMoodTrackingScreen = () => {
  const [listAns, setListAns] = useState<IAnswer[]>([]);
  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return DATA;
  };

  const { data: dataResp, isFetching } = useQuery({
    queryKey: ["fetchStressQuestion"],
    queryFn: fetchData,
  });

  const handleCheckboxChange = useCallback((values: string[], id: string) => {
    setListAns((prevList) => {
      // Filter out any existing entry with the same id
      const updatedList = prevList.filter((item) => item.id !== id);
      // Add the new or updated answer
      return [...updatedList, { id, ans: values }];
    });
  }, []);

  const renderItem: ListRenderItem<IDATA> = useCallback(
    ({ item, index }) => (
      <MemoizedQuestionItem
        values={get(listAns, `[${index}].ans`, [])}
        index={index}
        item={item}
        handleCheckboxChange={(values: any) =>
          handleCheckboxChange(values, item.id as string)
        }
      />
    ),
    [handleCheckboxChange, listAns]
  );

  return (
    <View style={styles.container}>
      <Text color="primary.500" fontWeight={600} fontSize={17} mb={1}>
        Stress and Mood Tracker
      </Text>

      <Text textAlign={"center"} fontSize={12} fontWeight={400}>
        For all questions, please select the appropriate response. There are no
        right or wrong answers. Do not spend too much time on any statement.
      </Text>

      {isFetching ? (
        <Loader />
      ) : (
        <>
          <HStack alignItems={"center"} mt={19} mb={19}>
            <HStack w="1/3">
              <Badge text="In the past 4 Weeks" _text={{ fontSize: 8 }} />
            </HStack>
            <HStack w="2/3" justifyContent={"space-between"}>
              <FlatList
                data={ANSWER}
                horizontal
                contentContainerStyle={{
                  justifyContent: "space-between",
                }}
                renderItem={({ item }) => (
                  <Badge
                    text={item.label}
                    _text={{ fontSize: 8 }}
                    _container={{ w: "12" }}
                  />
                )}
              />
            </HStack>
          </HStack>

          <FlatList
            data={dataResp}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
          />

          <Button text="Next" />
        </>
      )}
    </View>
  );
};

const MemoizedQuestionItem = memo(
  ({ item, handleCheckboxChange, values, index }: IMemoizedQuestionItem) => {
    // console.log("🚀 ~ values:", values, index)
    const [groupValues, setGroupValues] = useState<string[]>([]);
    // console.log("🚀 ~ groupValues:", groupValues)
    useEffect(() => {
      setGroupValues(values);
    }, [values]);

    return (
      <Box>
        <HStack alignItems={"center"}>
          <HStack w="1/3">
            <Text fontSize={"10"}>{item.question}</Text>
          </HStack>
          <HStack w="2/3" justifyContent={"space-evenly"}>
            <Checkbox.Group
              onChange={(values) => {
                setGroupValues(values);
                handleCheckboxChange(values);
              }}
              value={groupValues}
              accessibilityLabel="choose multiple items"
              flex={1}
            >
              <FlatList
                data={ANSWER}
                horizontal
                renderItem={({ item: answerItem, index }) => (
                  <Checkbox
                    aria-label={`checkbox-${index}`}
                    accessibilityLabel={`StressAndMoodTrackingCheckBox__${item.id}-${index}`}
                    value={answerItem.value}
                  />
                )}
                contentContainerStyle={{
                  justifyContent: "space-evenly",
                  flex: 1,
                }}
                keyExtractor={(_, index) => `${item.id}-${index}`}
              />
            </Checkbox.Group>
          </HStack>
        </HStack>
      </Box>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 11,
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default StressAndMoodTrackingScreen;
