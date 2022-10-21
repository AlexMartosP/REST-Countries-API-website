import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// Context
import { useTheme } from "../../context/ThemeProvider";
// Hooks
import useFetchCountry from "../../hooks/useFetchCountry";
// Helper
import formatPopulation from "../../helper/formatPopulation";
// Assets
import { ReactComponent as ArrowBack } from "../../assets/arrow-back-outline.svg";
// Styling
import {
  Container,
  Button,
  DetailsContainer,
  Details,
  Title,
  ListWrapper,
  BordersWrapper,
} from "./Country.styles";
import Fact from "../../components/Fact";

function Country() {
  const { code } = useParams();
  const navigate = useNavigate();

  const [data, loading] = useFetchCountry(code);

  const darkTheme = useTheme();

  return (
    <>
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
                  <Fact title="Native Name" value={data.nativeName} />
                  <Fact
                    title="Population"
                    value={formatPopulation(data.population)}
                  />
                  <Fact title="Region" value={data.region} />
                  <Fact title="Sub Region" value={data.subregion} />
                  <Fact title="Capital" value={data.capital} />
                </div>
                <div>
                  <Fact title="Top Level Domain" value={data.topLevelDomain} />
                  <Fact
                    title="Currencies"
                    value={data.currencies}
                    list
                    unique="code"
                    symbol
                  />
                  <Fact
                    title="Languages"
                    value={data.languages}
                    list
                    unique="iso639_2"
                  />
                </div>
              </ListWrapper>
              {data.borders.length > 0 && (
                <BordersWrapper darkTheme={darkTheme}>
                  <h2>Border Countries:</h2>
                  <div>
                    {data.borders.map((border) => (
                      <Link
                        key={border.alpha3Code}
                        to={`/${border.alpha3Code}`}
                      >
                        {border.name}
                      </Link>
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
      {!loading && (
        <Helmet>
          <title>{data.name}</title>
          <meta
            name="description"
            content={`${
              data.name
            } is a countey with a population of ${formatPopulation(
              data.population
            )}`}
          />
        </Helmet>
      )}
    </>
  );
}

export default Country;
