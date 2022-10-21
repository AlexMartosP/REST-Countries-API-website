import { useState } from "react";
import { Helmet } from "react-helmet-async";
// Hooks
import useFetch from "../../hooks/useFetch";
// Components
import SearchField from "../../components/SearchField";
import Filter from "../../components/Filter";
import CardGrid from "../../components/CardGrid";
// Styling
import { HomeContainer, SearchContainer } from "./Home.styles";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const [data, loading, error] = useFetch(searchInput, selectedRegion);

  return (
    <>
      <HomeContainer className="container">
        <SearchContainer>
          <SearchField
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <Filter
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </SearchContainer>
        <CardGrid
          data={data}
          loading={loading}
          error={error}
          searchInput={searchInput}
        />
      </HomeContainer>
      <Helmet>
        <title>Where in the world? - Search for a country here</title>
        <meta
          name="description"
          content="Here you cane search for more or less any country and view details about that country."
        />
      </Helmet>
    </>
  );
}
export default Home;
