import { ReactComponent as SearchIcon } from "../../assets/search-outline.svg";
// Context
import { useTheme } from "../../context/ThemeProvider";
// Styling
import { SearchWrapper, SearchInput } from "./SearchField.styles";

function SearchField({ searchInput, setSearchInput }) {
  const darkTheme = useTheme();

  return (
    <SearchWrapper darkTheme={darkTheme}>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder="Search for a country..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        darkTheme={darkTheme}
      />
    </SearchWrapper>
  );
}

export default SearchField;
