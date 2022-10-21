import { useEffect, useState } from "react";
// Context
import { useTheme } from "../../context/ThemeProvider";
// Assets
import { ReactComponent as ChevronDown } from "../../assets/chevron-down-outline.svg";
// Styling
import { FilterWrapper, SelectFilter, FilterDropdown } from "./Filter.styles";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function Filter({ selectedRegion, setSelectedRegion }) {
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
    if (region === selectedRegion) {
      return setSelectedRegion("");
    }
    setSelectedRegion(region);
  }

  return (
    <div>
      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
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
          <span>{selectedRegion || "Filter by Region"}</span>
          <ChevronDown />
        </SelectFilter>
        {isOpen && (
          <FilterDropdown darkTheme={darkTheme} className="dropdown">
            {regions.map((region) => (
              <div
                key={region}
                style={{
                  textDecoration:
                    region === selectedRegion ? "underline" : "none",
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
