import { useEffect, useRef, useState } from "react";

function useFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const countriesArray = useRef(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          "https://restcountries.com/v2/all?fields=name,capital,population,region,flag"
        );
        const data = await res.json();
        countriesArray.current = [...data];

        let dataArr = [];
        for (let i = 0; i < 48; i++) {
          dataArr.push(data[i]);
        }

        setData(dataArr);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    function addToData() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 1000
      ) {
        if (data.length <= data.length + 48) {
          let newArr = [...data];

          const max = newArr.length + 48 <= 250 ? newArr.length + 48 : 250;

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
