import {createContext,useContext} from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}
/*It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.*/