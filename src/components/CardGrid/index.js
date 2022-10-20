import { Grid, StateWrapper } from "./CardGrid.styles";
import Card from "../Card";
import { useTheme } from "../../context/ThemeProvider";

function CardGrid({ data, loading, error, searchInput }) {
  const darkTheme = useTheme();

  if (loading) {
    return (
      <StateWrapper darkTheme={darkTheme}>
        <h2>Loading...</h2>
      </StateWrapper>
    );
  }

  if (error || data.length === 0) {
    return (
      <StateWrapper darkTheme={darkTheme}>
        <h2>No countries found for "{searchInput}"</h2>
        <p>If you want to search world wide, remove the selected region</p>
      </StateWrapper>
    );
  }

  if (data.length > 0) {
    return (
      <Grid>
        {data.map((country) => (
          <Card key={country.name} country={country} />
        ))}
      </Grid>
    );
  }
}

export default CardGrid;
