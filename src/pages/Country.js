import { useNavigate, useParams, Link } from "react-router-dom";
import useFetchCountry from "../hooks/useFetchCountry";
import { ReactComponent as ArrowBack } from "../assets/arrow-back-outline.svg";
import {
  Container,
  Button,
  DetailsContainer,
  Details,
  Title,
  ListWrapper,
  BordersWrapper,
} from "./Country.styles";
import { useTheme } from "../context/ThemeProvider";

function Country() {
  const { code } = useParams();
  const navigate = useNavigate();

  const [data, loading, error] = useFetchCountry(code);

  if (error) {
    console.log("error");
  }

  const darkTheme = useTheme();

  return (
    <Container className="container" darkTheme={darkTheme}>
      <Button darkTheme={darkTheme} onClick={() => navigate("/")}>
        <ArrowBack />
        <span>Back</span>
      </Button>
      {!loading ? (
        <DetailsContainer>
          <div>
            <img src={data.flag} alt="" />
          </div>
          <Details>
            <Title>{data.name}</Title>
            <ListWrapper>
              <div>
                <p>
                  Native Name: <span>{data.nativeName}</span>
                </p>
                <p>
                  Population: <span>{data.population}</span>
                </p>
                <p>
                  Region: <span>{data.region}</span>
                </p>
                <p>
                  Sub Region: <span>{data.subregion}</span>
                </p>
                <p>
                  Capital: <span>{data.capital}</span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain: <span>{data.topLevelDomain}</span>
                </p>
                <p>
                  Currencies:{" "}
                  {data.currencies.map((currency, index) => (
                    <span key={currency.code}>
                      {currency.name} ({currency.symbol})
                      {index !== data.currencies.length - 1 && ", "}
                    </span>
                  ))}
                </p>
                <p>
                  Languages:{" "}
                  {data.languages.map((language, index) => (
                    <span key={language.iso639_2}>
                      {language.name}
                      {index !== data.currencies.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
            </ListWrapper>
            {data.borders.length > 0 && (
              <BordersWrapper darkTheme={darkTheme}>
                <h2>Border Countries:</h2>
                <div>
                  {data.borders.map((border) => (
                    <Link to={`/${border.alpha3Code}`}>{border.name}</Link>
                  ))}
                </div>
              </BordersWrapper>
            )}
          </Details>
        </DetailsContainer>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
}

export default Country;
