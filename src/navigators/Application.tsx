import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Example, Startup } from "@/screens";
import { useTheme } from "@/theme";

import type { ApplicationStackParamList, RootTabParamList } from "@/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      {/* <Tab.Navigator>
        <Tab.Screen name="Startup" component={Startup} />
        <Tab.Screen name="Example" component={Example} />
      </Tab.Navigator> */}
      <Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="Startup" component={Startup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
