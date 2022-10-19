import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding-block: 1.5rem;
  background-color: ${(props) =>
    props.darkTheme ? "var(--dark-blue)" : "#fff"};
  color: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
  fill: ${(props) => (props.darkTheme ? "#fff" : "var(--very-dark-blue)")};
  box-shadow: 0 0px 5px 0px #00000017;

  h1 {
    font-weight: 800;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

export const ThemeToggle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  svg {
    width: 1rem;
  }

  span {
    font-size: 0.75rem;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;
