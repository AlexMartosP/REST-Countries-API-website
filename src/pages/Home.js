import { useState } from "react";
import SearchField from "../components/SearchField";
import Filter from "../components/Filter";
import { HomeContainer, SearchContainer } from "./Home.styles";
import useFetch from "../hooks/useFetch";
import CardGrid from "../components/CardGrid";
import { Helmet } from "react-helmet-async";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const [data, loading, error] = useFetch(searchInput, selectedFilter);

  return (
    <>
      <HomeContainer className="container">
        <SearchContainer>
          <SearchField
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <Filter
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
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
