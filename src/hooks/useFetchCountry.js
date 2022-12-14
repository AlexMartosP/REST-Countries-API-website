import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const fields =
  "?fields=name,nativeName,capital,population,region,subregion,flag,currencies,languages,topLevelDomain,borders";

function useFetchCountry(code) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const countryRes = await fetch(
          `https://restcountries.com/v2/alpha/${code}${fields}`
        );
        const countryData = await countryRes.json();

        let data;

        if (countryData.borders.length > 0) {
          const bordersRes = await fetch(
            `https://restcountries.com/v2/alpha?codes=${countryData.borders.join(
              ","
            )}&fields=name,alpha3Code`
          );
          const bordersData = await bordersRes.json();

          data = { ...countryData, borders: [...bordersData] };
        } else {
          data = { ...countryData };
        }

        setData(data);
      } catch (error) {
        navigate("/404");
      }
      setLoading(false);
    }

    fetchData();
  }, [code, navigate]);

  return [data, loading];
}

export default useFetchCountry;
