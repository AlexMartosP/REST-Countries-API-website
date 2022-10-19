import { useState } from "react";
import { ReactComponent as ChevronDown } from "../../assets/chevron-down-outline.svg";
import { useTheme } from "../../context/ThemeProvider";
// Styling
import { FilterWrapper, SelectFilter, FilterDropdown } from "./Filter.styles";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

function Filter({ selectedFilter, setSelectedFilter }) {
  const darkTheme = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  function changeFilter(region) {
    if (region === selectedFilter) {
      return setSelectedFilter("");
    }
    setSelectedFilter(region);
  }

  return (
    <div>
      <select
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
        className="visually-hidden"
        aria-label="Filter by region"
      >
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <FilterWrapper aria-hidden>
        <SelectFilter
          darkTheme={darkTheme}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span>{selectedFilter || "Filter by Region"}</span>
          <ChevronDown />
        </SelectFilter>
        {isOpen && (
          <FilterDropdown darkTheme={darkTheme}>
            {regions.map((region) => (
              <div
                style={{
                  textDecoration:
                    region === selectedFilter ? "underline" : "none",
                }}
                onClick={() => changeFilter(region)}
              >
                {region}
              </div>
            ))}
          </FilterDropdown>
        )}
      </FilterWrapper>
    </div>
  );
}

export default Filter;
