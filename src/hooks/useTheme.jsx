import { useState } from "react";
import { createContext, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [theme, setTheme] = useState('')
//   const themeLocalStorage = localStorage.getItem("theme");
//   const [theme, setTheme] = useState(
//     themeLocalStorage === null ? "dark" : themeLocalStorage
//   );
  function changeTheme(themeRecieved) {
    if (themeRecieved !== theme) {
      setTheme(themeRecieved);
    //   localStorage.setItem("theme", themeRecieved);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {

    const context = useContext(ThemeContext)

    return context

}