import { useState, createContext } from "react";

const themes = {
  primary: "primary",
  light: "light",
  dark: "dark",
};

const ThemeContext = createContext({
  navTheme: themes.primary,
  bodyTheme: themes.light,
  toggleTheme: () => {},
});

function ThemeContextProvider(props: any) {
  const [navTheme, setNavTheme] = useState(themes.primary);
  const [bodyTheme, setBodyTheme] = useState(themes.light);
  const toggleTheme = () => {
    setNavTheme((prevTheme: string) =>
      prevTheme === themes.primary ? themes.dark : themes.primary
    );
    setBodyTheme((prevTheme: string) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ navTheme, bodyTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
