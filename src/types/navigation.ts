import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { StackScreenProps } from "@react-navigation/stack";

export type ApplicationStackParamList = {
  Startup: undefined;
  MainScreen: undefined;
};

export type ApplicationScreenProps =
  | StackScreenProps<ApplicationStackParamList>
  | any;

export type RootTabParamList = {
  HomeScreen: undefined;
  ChatScreen: undefined;
  ReportScreen: undefined;
};

export type ReportStackParamList = {
  StressAndMoodTrackingScreen: undefined;
};
