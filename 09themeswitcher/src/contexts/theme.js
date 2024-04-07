import { createContext, useContext } from "react";

export const ThemeCOntext = createContext({
    themeMode : 'light',	
    darkTheme : () => {},
    lightTheme : () => {},
});


export const ThemeProvider = ThemeCOntext.Provider

export default function useTheme() {
    return useContext(ThemeCOntext)
}