import {useState} from 'react'
import Home from "./page/Home";
import GlobalStyles from "./styles/globalStyles";
import darkTheme from "./styles/themes/dark";
import lightTheme from "./styles/themes/light";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./context/Theme";

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const handleSwitchTheme = () => {
    setTheme((oldTheme) => {
      if (oldTheme.background === "#F1F2F2") {
        console.log("DARK")
        return darkTheme;
      }
      console.log("LIGHT")
      return lightTheme;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        switchTheme: handleSwitchTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
