import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MMKV } from "react-native-mmkv";

import { ThemeProvider } from "@/theme";

import ApplicationNavigator from "./navigators/Application";
import "./translations";
import { NativeBaseProvider } from "native-base";
import { theme } from "./theme/_config";

const queryClient = new QueryClient();

export const storage = new MMKV();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <ThemeProvider storage={storage}>
          <ApplicationNavigator />
        </ThemeProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}

export default App;
