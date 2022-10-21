import { useTheme, useThemeUpdate } from "../../context/ThemeProvider";
// Assets
import { ReactComponent as OutlineMoon } from "../../assets/moon-outline.svg";
import { ReactComponent as FilledMoon } from "../../assets/moon.svg";
// Styling
import { HeaderContainer, ThemeToggle } from "./Header.styles";
import { Link } from "react-router-dom";

function Header() {
  const darkTheme = useTheme();
  const setDarkTheme = useThemeUpdate();

  return (
    <HeaderContainer darkTheme={darkTheme}>
      <div className="container">
        <div className="flex--space-between">
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
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
