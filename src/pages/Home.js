import { useState } from "react";
import styled from "styled-components";
import SearchField from "../components/SearchField";
import Filter from "../components/Filter";
import { HomeContainer, SearchContainer, CardList } from "./Home.styles";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const [data, loading, error] = useFetch();

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
      <CardList>
        {!loading &&
          data.map((country) => <Card key={country.name} country={country} />)}
      </CardList>
    </HomeContainer>
  );
}
export default Home;
