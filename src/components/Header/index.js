import { useTheme, useThemeUpdate } from "../../context/ThemeProvider";
// Icon
import { ReactComponent as OutlineMoon } from "../../assets/moon-outline.svg";
import { ReactComponent as FilledMoon } from "../../assets/moon.svg";
// Styled components
import { HeaderContainer, ThemeToggle } from "./Header.styles";

function Header() {
  const darkTheme = useTheme();
  const setDarkTheme = useThemeUpdate();

  return (
    <HeaderContainer darkTheme={darkTheme}>
      <div className="container">
        <div className="flex--space-between">
          <h1>Where in the world?</h1>
          <ThemeToggle onClick={() => setDarkTheme((prev) => !prev)}>
            {darkTheme ? <FilledMoon /> : <OutlineMoon />}
            <span>Dark Mode</span>
          </ThemeToggle>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
