import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import type { ThemeConfiguration } from "@/types/theme/config";
import { Checkbox, Radio, extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      500: "#1E7075",
      400: "#91C6CA",
      300: "#D2E2E3",
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: "#d97706",
    },
    dark: {
      800: "#313131",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
  components: {
    Radio: {
      baseStyle: {
        // Override default styles for radio button
        borderColor: "#91C6CA",
        _checked: {
          borderColor: "primary.500", // Change the background color when checked
          _icon: {
            color: "primary.500",
          },
        },

        // You can customize other styles here
      },
    },
    Checkbox: {
      baseStyle: {
        // Override default styles for radio button
        borderColor: "#91C6CA",
        _checked: {
          borderColor: "primary.500", // Change the background color when checked
          _icon: {
            color: "primary.500",
          },
        },

        // You can customize other styles here
      },
    },
  },
});

const colorsLight = {
  white: "#ffffff",
  red500: "#C13333",
  gray800: "#303030",
  gray400: "#4D4D4D",
  gray200: "#A1A1A1",
  gray100: "#DFDFDF",
  gray50: "#EFEFEF",
  purple500: "#44427D",
  purple100: "#E1E1EF",
  dark800: "#333333",
  dark700: "#343434",
  purple50: "#1B1A23",
  teal500: "#1E7075",
  teal400: "#91C6CA",
} as const;

const colorsDark = {
  red500: "#C13333",
  gray800: "#E0E0E0",
  gray400: "#969696",
  gray200: "#BABABA",
  gray100: "#000000",
  gray50: "#EFEFEF",
  purple500: "#A6A4F0",
  purple100: "#252732",
  purple50: "#1B1A23",
  teal500: "#1E7075",
  teal400: "#91C6CA",
} as const;

const sizes = [12, 16, 24, 32, 40, 80] as const;

export const config = {
  colors: colorsLight,
  fonts: {
    sizes,
    colors: colorsLight,
  },
  gutters: sizes,
  backgrounds: colorsLight,
  borders: {
    widths: [1, 2],
    radius: [4, 16],
    colors: colorsLight,
  },
  navigationColors: {
    ...DefaultTheme.colors,
    background: colorsLight.gray50,
    card: colorsLight.gray50,
  },
  variants: {
    dark: {
      colors: colorsDark,
      fonts: {
        colors: colorsDark,
      },
      backgrounds: colorsDark,
      navigationColors: {
        ...DarkTheme.colors,
        background: colorsDark.purple50,
        card: colorsDark.purple50,
      },
    },
  },
} as const satisfies ThemeConfiguration;
