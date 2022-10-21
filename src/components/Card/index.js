import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";
import formatPopulation from "../../helper/formatPopulation";
import { CardContainer, CardDetails, CardSingleDetail } from "./Card.styles";

function Card({ country }) {
  const darkTheme = useTheme();

  return (
    <CardContainer darkTheme={darkTheme}>
      <Link to={country.alpha3Code}>
        <img src={country.flag} alt={country.name} loading="auto" />
      </Link>
      <CardDetails>
        <Link to={country.alpha3Code}>
          <h2>{country.name}</h2>
        </Link>
        <div>
          <CardSingleDetail>
            Population: <span>{formatPopulation(country.population)}</span>
          </CardSingleDetail>
          <CardSingleDetail>
            Region: <span>{country.region}</span>
          </CardSingleDetail>
          <CardSingleDetail>
            Capital: <span>{country.capital}</span>
          </CardSingleDetail>
        </div>
      </CardDetails>
    </CardContainer>
  );
}

export default Card;
