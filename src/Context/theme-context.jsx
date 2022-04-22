import { createContext, useContext, useState } from "react";

const light = {
	bgColor: "#E9D5DA",
	textColor: "#827397",
	secondaryColor: "#4D4C7D",
};

const dark = {
	bgColor: "#363062",
	textColor: "#FFC8C8",
	secondaryColor: "#4D4C7D",
};
const ThemeContext = createContext({ mode: dark, isLight: false });
const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState({ mode: dark, isLight: false });
	const themeHandler = () => {
		theme.isLight
			? setTheme({ mode: dark, isLight: false })
			: setTheme({ mode: light, isLight: true });
	};
	return (
		<ThemeContext.Provider value={{ theme, themeHandler }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
