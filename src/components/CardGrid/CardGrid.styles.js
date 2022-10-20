import styled, { css } from "styled-components";

const spacing = css`
  padding-block: 1.5rem;

  @media (min-width: 768px) {
    padding-block: 3rem;
  }
`;

export const Grid = styled.div`
  ${spacing}

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 4rem;
`;

export const StateWrapper = styled.div`
  ${spacing}

  display: grid;
  place-items: center;
  color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
