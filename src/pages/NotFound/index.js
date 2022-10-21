// Context
import { useTheme } from "../../context/ThemeProvider";
// Styling
import { Wrapper } from "./NotFound.styles";

function NotFound() {
  const darkTheme = useTheme();

  return (
    <Wrapper darkTheme={darkTheme}>
      <h1>404 not found</h1>
      <p>Ops! This should not happen</p>
    </Wrapper>
  );
}

export default NotFound;
