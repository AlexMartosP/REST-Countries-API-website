import { useState } from "react";
import SearchField from "../components/SearchField";
import Filter from "../components/Filter";
import { HomeContainer, SearchContainer } from "./Home.styles";
import useFetch from "../hooks/useFetch";
import CardGrid from "../components/CardGrid";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const [data, loading, error] = useFetch(searchInput, selectedFilter);

  return (
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
  );
}
export default Home;
