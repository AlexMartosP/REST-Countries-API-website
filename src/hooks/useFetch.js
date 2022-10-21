import { useCallback, useEffect, useRef, useState } from "react";
// Helper
import decreaseLength from "../helper/decreaseLength";

const fields = "?fields=alpha3Code,name,capital,population,region,flag";

function useFetch(searchInput, selectedRegion) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const countriesArray = useRef(null);
  const regionCountries = useRef(null);
  const currentRegion = useRef("");
  const timeoutId = useRef(null);

  const fetchData = useCallback(async (url, name) => {
    setLoading(true);
    try {
      const res = await fetch(url);

      const data = await res.json();

      if (name) {
        const loswerSearch = name.toLowerCase();
        regionCountries.current = [...data];
        countriesArray.current = data.filter((country) => {
          let lowerName = country.name.toLowerCase();
          return lowerName.includes(loswerSearch);
        });
      } else {
        countriesArray.current = [...data];
      }

      const dataArr = decreaseLength(countriesArray.current);

      setData(dataArr);
      setError(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (timeoutId.current) clearTimeout(timeoutId.current);

    if (!selectedRegion && !searchInput) {
      fetchData(`https://restcountries.com/v2/all${fields}`);
    } else if (selectedRegion && !searchInput) {
      if (selectedRegion === currentRegion.current) {
        countriesArray.current = regionCountries.current;

        const dataArr = decreaseLength(countriesArray.current);

        setData([...dataArr]);
        setLoading(false);
      } else {
        fetchData(
          `https://restcountries.com/v2/region/${selectedRegion}${fields}`
        );
        currentRegion.current = selectedRegion;
      }
    } else if (selectedRegion && searchInput) {
      setLoading(true);

      timeoutId.current = setTimeout(() => {
        fetchData(
          `https://restcountries.com/v2/region/${selectedRegion}${fields}`,
          searchInput
        );
      }, 1000);
    } else if (searchInput) {
      setLoading(true);

      timeoutId.current = setTimeout(() => {
        fetchData(`https://restcountries.com/v2/name/${searchInput}${fields}`);
      }, 1000);
    }
  }, [selectedRegion, searchInput, fetchData]);

  useEffect(() => {
    function addToData() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 1000
      ) {
        if (countriesArray.current.length > 48) {
          let newArr = [...data];

          const max =
            newArr.length + 48 <= countriesArray.current.length
              ? newArr.length + 48
              : countriesArray.current.length;

          for (let i = newArr.length; i < max; i++) {
            newArr.push(countriesArray.current[i]);
          }

          setData(newArr);
        }
      }
    }

    if (data.length > 0) {
      window.addEventListener("scroll", addToData);
    }

    return () => window.removeEventListener("scroll", addToData);
  }, [data]);

  return [data, loading, error];
}

export default useFetch;
