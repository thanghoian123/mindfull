import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { StackScreenProps } from "@react-navigation/stack";

export type ApplicationStackParamList = {
  Startup: undefined;
  Example: undefined;
};

export type ApplicationScreenProps =
  | StackScreenProps<ApplicationStackParamList>
  | any;
export type RootTabParamList = {
  Startup: undefined;
  Example: undefined;
};
