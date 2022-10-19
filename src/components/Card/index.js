import { useTheme } from "../../context/ThemeProvider";
import { CardContainer, CardDetails, CardSingleDetail } from "./Card.styles";

function Card({ country }) {
  const darkTheme = useTheme();

  return (
    <CardContainer darkTheme={darkTheme}>
      <img src={country.flag} alt={country.name} />
      <CardDetails>
        <h2>{country.name}</h2>
        <div>
          <CardSingleDetail>
            Population: <span>{country.population}</span>
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
