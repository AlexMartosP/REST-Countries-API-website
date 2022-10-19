import styled from "styled-components";

export const HomeContainer = styled.div`
  padding-block: 1.5rem;

  @media (min-width: 768px) {
    padding-block: 3rem;
  }
`;

export const SearchContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CardList = styled.div`
  padding-block: 1.5rem;

  @media (min-width: 768px) {
    padding-block: 3rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4rem;
`;
