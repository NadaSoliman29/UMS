import { createContext, useEffect, useState, type ReactNode } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  themeStyles: {
    backgroundColor: string;
    textColor: string;
    cardBackground: string;
  };
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = isDark ? "dark-theme" : "light-theme";
  }, [isDark]);

  const themeStyles = {
    backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
    textColor: isDark ? "#f0f0f0" : "#000000",
    cardBackground: isDark ? "#2e2e2e" : "#f8f8f8",
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
}
