import { useEffect, useState } from "react";
import { ReactComponent as ChevronDown } from "../../assets/chevron-down-outline.svg";
import { useTheme } from "../../context/ThemeProvider";
// Styling
import { FilterWrapper, SelectFilter, FilterDropdown } from "./Filter.styles";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function Filter({ selectedFilter, setSelectedFilter }) {
  const darkTheme = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("dropdown") &&
        !e.target.parentElement.classList.contains("dropdown")
      ) {
        setIsOpen(false);
      }
    });
  }, []);

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
          className="dropdown"
        >
          <span>{selectedFilter || "Filter by Region"}</span>
          <ChevronDown />
        </SelectFilter>
        {isOpen && (
          <FilterDropdown darkTheme={darkTheme} className="dropdown">
            {regions.map((region) => (
              <div
                key={region}
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
