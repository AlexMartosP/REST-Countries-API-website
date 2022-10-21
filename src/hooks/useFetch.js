import { useCallback, useEffect, useRef, useState } from "react";

function useFetch(searchInput, selectedFilter) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const countriesArray = useRef(null);
  const origCountries = useRef(null);
  const currentFilter = useRef("");
  const timeoutId = useRef(null);

  const fetchData = useCallback(async (url, name) => {
    setLoading(true);
    try {
      const res = await fetch(url);

      const data = await res.json();

      if (name) {
        name.toLowerCase();
        origCountries.current = [...data];
        countriesArray.current = data.filter((country) => {
          let lowerName = country.name.toLowerCase();
          return lowerName.includes(name);
        });
      } else {
        countriesArray.current = [...data];
      }

      const dataArr = decreaseLength();

      setData(dataArr);
      setError(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, []);

  function decreaseLength() {
    let dataArr = [];
    const max =
      countriesArray.current.length >= 48 ? 48 : countriesArray.current.length;
    for (let i = 0; i < max; i++) {
      dataArr.push(countriesArray.current[i]);
    }

    return dataArr;
  }

  useEffect(() => {
    if (timeoutId.current) clearTimeout(timeoutId.current);

    if (!selectedFilter && !searchInput) {
      fetchData(
        "https://restcountries.com/v2/all?fields=alpha3Code,name,capital,population,region,flag"
      );
    } else if (selectedFilter && !searchInput) {
      if (selectedFilter === currentFilter.current) {
        countriesArray.current = origCountries.current;

        const dataArr = decreaseLength();
        setData([...dataArr]);
        setLoading(false);
      } else {
        fetchData(
          `https://restcountries.com/v2/region/${selectedFilter}?fields=alpha3Code,name,capital,population,region,flag`
        );
        currentFilter.current = selectedFilter;
      }
    } else if (selectedFilter && searchInput) {
      setLoading(true);
      timeoutId.current = setTimeout(() => {
        fetchData(
          `https://restcountries.com/v2/region/${selectedFilter}?fields=alpha3Code,name,capital,population,region,flag`,
          searchInput
        );
      }, 1000);
    } else if (searchInput) {
      setLoading(true);
      timeoutId.current = setTimeout(() => {
        fetchData(
          `https://restcountries.com/v2/name/${searchInput}?fields=alpha3Code,name,capital,population,region,flag`
        );
      }, 1000);
    }
  }, [selectedFilter, searchInput, fetchData]);

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
