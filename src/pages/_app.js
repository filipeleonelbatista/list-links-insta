import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import ThemeContext from "../context/Theme";
import GlobalStyles from "../styles/globalStyles";
import darkTheme from "../styles/themes/dark";
import lightTheme from "../styles/themes/light";


function MyApp({ Component, pageProps }) {
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
                <Component {...pageProps} />
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default MyApp