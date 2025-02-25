import { createContext, useContext, useEffect, useState } from "react"

const AppSettingsContext = createContext();

export const AppSettingsProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [deviceSize, setDeviceSize] = useState(getDeviceSize());

    useEffect(() => {
        const handleResize = () => setDeviceSize(getDeviceSize());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <AppSettingsContext.Provider value={{ theme, toggleTheme, deviceSize }}>
            {children}
        </AppSettingsContext.Provider>
    );
};

const getDeviceSize = () => {
    const width = window.innerWidth;
    if (width <= 600) return 1;
    if (width <= 1024) return 2;
    return 3;
};

export const useAppSettings = () => useContext(AppSettingsContext);
