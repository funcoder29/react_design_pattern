import { useTheme } from "./useTheme.js";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header
      className={theme}
      style={{ backgroundColor: theme === "light" ? "white" : "black" }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};
